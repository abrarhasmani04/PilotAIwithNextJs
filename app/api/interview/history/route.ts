import { connectDB } from "@/components/utils/mongodb";
import Interview from "@/models/Interview";

export async function GET() {
    try {
      console.log("GET /api/interview/history called");
  
      await connectDB();
  
      const interviews = await Interview.find().sort({
        createdAt: -1,
      });
  
      console.log(interviews);
  
      return Response.json(interviews);
    } catch (error) {
      console.error(error);
  
      return Response.json(
        { error: "Failed to fetch interviews" },
        { status: 500 }
      );
    }
  }