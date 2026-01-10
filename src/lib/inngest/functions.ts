import { inngest } from "./client";

export const sendSignUpEmail = inngest.createFunction(
    {id: 'sign-up-email'},
    {event: 'app/user.created'},
    async({event,step}) => {
        const userProfile = `
            -Country: ${event.data.country}
            -Investment Goals: ${event.data.investmentGoals}
            -Risk Tolerenece : ${event.data.riskTolerenece}
            -Preferred Industry: ${event.data.preferredIndustry}`
    }
)