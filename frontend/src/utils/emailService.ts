interface SendEmailParams {
    endpoint: string;
    data: Record<string, any>;
}

export const sendEmail = async ({ endpoint, data }: SendEmailParams) => {
    const baseUrl =
        import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    const res = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
        throw new Error(result.message || "Failed to send email");
    }

    return result;
};
