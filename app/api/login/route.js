import { NextResponse } from "next/server";

const users = [
    { id: 1, username: "Muneeb", password: "123" },
    { id: 2, username: "Saidal", password: "1276" },
    { id: 3, username: "Hamad", password: "13" },
];

export async function POST(request) {
    try {
        let username, password;

        const contentType = request.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
            const body = await request.json();
            username = body?.username;
            password = body?.password;
        } else if (contentType.includes("form")) {
            const formData = await request.formData();
            username = formData.get("username");
            password = formData.get("password");
        } else {
            // Try JSON first, fall back to text
            try {
                const body = await request.json();
                username = body?.username;
                password = body?.password;
            } catch {
                const text = await request.text();
                try {
                    const body = JSON.parse(text);
                    username = body?.username;
                    password = body?.password;
                } catch {
                    // noop
                }
            }
        }

        if (!username || !password) {
            return NextResponse.json(
                { success: false, message: "Username and password are required" },
                { status: 400 }
            );
        }

        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Invalid credentials" },
                { status: 401 }
            );
        }

        const { password: _pwd, ...safeUser } = user;

        return NextResponse.json({
            success: true,
            message: "Login successful",
            user: safeUser,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Invalid request body" },
            { status: 400 }
        );
    }
}
