import React, { useState } from "react";
import OpenAI from "openai";
import { useDispatch } from "react-redux";
import { reset, setAiMessage } from "../store/aiSlice";
import { OPEN_AI_KEY } from "../constants/api";

function useGpt() {
  const [loadings, setLoadings] = useState(false);
  const dispatch = useDispatch();

  const client = new OpenAI({
    apiKey: OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function getData(input) {
    dispatch(reset());
    setLoadings(true);
    const chatCompletion = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a movie recommendation system.
             Provide exactly 5 movie recommendations based on the user's query.
             Provide only movie names as comma separated
             If the query is not related to movies, respond with an error message.`,
        },
        {
          role: "user",
          content: input,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    setLoadings(false);
    dispatch(setAiMessage(chatCompletion.choices[0].message.content));
  }

  return { getData, loadings };
}

export default useGpt;
