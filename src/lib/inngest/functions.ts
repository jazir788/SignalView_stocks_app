import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";

export const sendSignUpEmail = inngest.createFunction(
    {id: 'sign-up-email'},
    {event: 'app/user.created'},
    async({event,step}) => {
        const userProfile = `
            -Country: ${event.data.country}
            -Investment Goals: ${event.data.investmentGoals}
            -Risk Tolerenece : ${event.data.riskTolerenece}
            -Preferred Industry: ${event.data.preferredIndustry}`

            const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace('{{userProfile}}', userProfile)

            const response = await step.ai.infer('generate-welcome-intro', {
                model: step.ai.models.gemini({ model:'gemini-2.5-flash-lite'}) , 
                    body: {
                        contents: [
                        {
                            role:'user',
                            parts:[
                                {text:prompt}
                            ]

                        }
                    ]
                    }
            })
    }
)