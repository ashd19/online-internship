import { z } from "zod";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const studentLoginSchema = z.object({
  email: z.email(),
});

export type StudentLoginRequest = z.infer<typeof studentLoginSchema>;
export async function POST(req: Request) {
  // post request right now only send and get email ..

  try {
    const { email } = await req.json();
    const parsedData = studentLoginSchema.parse({ email });
    // parsed data is never false here due to zod parsing

    // alert users about duplicate emails
    const existingStudent = await prisma.student.findUnique({
      where: { email: parsedData.email },
    });

    if (existingStudent) {
      return new Response(
        `User with email ${parsedData.email} already exists`,
        { status: 400 }
      );
      // add to db
      // upsert to handle existing users
    }
    const student = await prisma.student.upsert({
      where: { email: parsedData.email },
      update: { updatedAt: new Date() },
      create: { email: parsedData.email },
    });

    return Response.json({
      success: true,
      message: `Student with email ${student.email} ltogged in successfully`,
      student: {
        id: student.id,
        email: student.email,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError)
      return Response.json(
        {
          success: false,
          message: "Invalid request data",
          errors: error.issues,
        },
        { status: 400 }
      );

    console.error("Error in student login:", error);
    return Response.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export function GET(req: Request) {
  return new Response("Hi");
}
