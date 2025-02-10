import OpenAI from 'openai';
import { OPEN_AI_GPT_KEY } from './constant';



const client = new OpenAI({
   
    apiKey: OPEN_AI_GPT_KEY,
    dangerouslyAllowBrowser: true 
});


export default client;