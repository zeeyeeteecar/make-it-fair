import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { AxiosError } from "axios";
import React from "react";

export async function POST(request: NextRequest) {
  
  try {
    const reqBody = await request.json();
    const { loginPasscode } = reqBody;
  
    console.log("loginPasscode server", loginPasscode);

    const user_access_passcode = process.env.LOGIN_PASSCODE;

console.log("user_access_passcode", user_access_passcode)

    if (loginPasscode.length === 0) {
      return NextResponse.json(
        { error: "Pls input Passcode" },
        { status: 401 }
      );
    }

        //check if password valid
        const validPasscode = (await loginPasscode) === user_access_passcode?.toString();
        if (!validPasscode) {
          return NextResponse.json({ error: "Invalid Passcode" }, { status: 402 });
        }

    
    //create token data
    const tokenData = {
      loginPasscode: loginPasscode,
    };

    console.log("tokenData", tokenData);

    //create token

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1h",
    });

    // return NextResponse.json({
    //   message: "Login successful",
    //   success: true,
    // });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      loginPasscode,
    });

    // response.cookies.set("token", token, {
    //   httpOnly: true,
    //   secure: true,
    //   maxAge: 30 * 1000,
    // });

    response.cookies.set("token", token, {
      expires: new Date(Date.now() + 60 * 60 * 1000),
    });

    console.log("reqBody===", reqBody);
    console.log("loginPasscode===", loginPasscode);

    return response;
  } catch (error) {
    const err = error as AxiosError;
    return NextResponse.json({ err: error }, { status: 500 });
  }
}
