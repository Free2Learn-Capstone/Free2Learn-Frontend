import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyTokenAndGetRole } from "./src/utils/auth";

export function middleware(allowedRoles: string[]) {
  return async function (request: NextRequest) {
    const authorizationHeader = request.headers.get("authorization");

    if (!authorizationHeader) {
      console.log("Token missing");
      return new Response(JSON.stringify({ error: "Token missing" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const token = authorizationHeader.replace("Bearer ", "");

    const userRole = verifyTokenAndGetRole(token);

    if (!userRole || !allowedRoles.includes(userRole)) {
      console.log("Unauthorized");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log(`User is ${userRole}`);
    if (userRole === 'SUPER_ADMIN') {
    
      if (request.nextUrl.pathname === '/admin') {
        return NextResponse.next(); 
      }
        console.log('Admin');
      } else if (userRole === 'VOLUNTEER') {
        if (request.nextUrl.pathname === '/volunteer') {
          return NextResponse.next(); 
        }
        console.log('Volunteer');
      } else if (userRole === 'STUDENT') {
        if (request.nextUrl.pathname === '/student') {
          return NextResponse.next(); 
        }
        console.log('Student');
      } 

    return NextResponse.next(); 
  };
}

export const config = {
  //   matcher: ['/(.)*'],
  api: {
    bodyParser: false,
  },
};
