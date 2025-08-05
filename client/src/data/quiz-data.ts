export interface QuizAnswer {
  id: string;
  text: string;
  path?: string;
}

export interface QuizQuestion {
  question: string;
  answers: QuizAnswer[];
}

export interface QuizPath {
  [key: string]: QuizQuestion[];
}

export interface ResultContent {
  title: string;
  subtitle: string;
  buttonText: string;
}

export const firstQuestion: QuizQuestion = {
  question: "How do you usually feel when you wake up in the morning?",
  answers: [
    { id: 'A', text: 'Tired — like I didn\'t sleep enough.', path: 'tired' },
    { id: 'B', text: 'Sore or stiff — especially in my back or joints.', path: 'sore' },
    { id: 'C', text: 'Mentally foggy or slow to start the day.', path: 'foggy' },
    { id: 'D', text: 'Tense or anxious — like I\'m not fully relaxed.', path: 'tense' },
    { id: 'E', text: 'Pretty good actually — I feel rested.', path: 'rested' }
  ]
};

export const quizPaths: QuizPath = {
  tired: [
    {
      question: "Where do you usually feel the stiffness or soreness?",
      answers: [
        { id: '1', text: 'Lower back' },
        { id: '2', text: 'Neck or shoulders' },
        { id: '3', text: 'Hips or knees' },
        { id: '4', text: 'All over — like my whole body aches' },
        { id: '5', text: 'It moves around, not always in the same spot' }
      ]
    },
    {
      question: "How often do you stretch or move in the morning just to 'loosen up'?",
      answers: [
        { id: '1', text: 'Every day — it\'s the only way I feel normal' },
        { id: '2', text: 'A few times a week' },
        { id: '3', text: 'Only if I feel sore' },
        { id: '4', text: 'I don\'t really do that' },
        { id: '5', text: 'I wake up stiff, but I just deal with it' }
      ]
    },
    {
      question: "Would you say your sleep is restful, or more light and interrupted?",
      answers: [
        { id: '1', text: 'Light and interrupted' },
        { id: '2', text: 'It varies a lot' },
        { id: '3', text: 'It feels deep, but I still wake up sore' },
        { id: '4', text: 'Not sure' },
        { id: '5', text: 'I think it\'s fine, but hard to say' }
      ]
    },
    {
      question: "How would you describe your sleep environment?",
      answers: [
        { id: '1', text: 'Too warm, too many blankets' },
        { id: '2', text: 'I often sleep in odd positions' },
        { id: '3', text: 'I use ergonomic pillows/mattress' },
        { id: '4', text: 'I sleep with a partner who moves a lot' },
        { id: '5', text: 'It\'s quiet and comfortable' }
      ]
    }
  ],
  sore: [
    {
      question: "What do you usually feel first thing in the morning?",
      answers: [
        { id: '1', text: 'Like I need caffeine just to function' },
        { id: '2', text: 'Heavy-headed, like my brain is stuck' },
        { id: '3', text: 'Groggy or "off" for a while' },
        { id: '4', text: 'Distracted or mentally cluttered' },
        { id: '5', text: 'Emotionally flat — not sad, just… dull' }
      ]
    },
    {
      question: "How long does it usually take you to feel like yourself after waking up?",
      answers: [
        { id: '1', text: 'Less than 15 minutes' },
        { id: '2', text: '30–60 minutes' },
        { id: '3', text: 'Over an hour' },
        { id: '4', text: 'It varies a lot' },
        { id: '5', text: 'Sometimes I never really feel fully "on"' }
      ]
    },
    {
      question: "How often do you forget little things during the day?",
      answers: [
        { id: '1', text: 'Constantly — it\'s frustrating' },
        { id: '2', text: 'A few times a day' },
        { id: '3', text: 'Sometimes, but I just laugh it off' },
        { id: '4', text: 'Not often' },
        { id: '5', text: 'I\'m not sure' }
      ]
    },
    {
      question: "How would you describe your sleep?",
      answers: [
        { id: '1', text: 'I wake up often' },
        { id: '2', text: 'I sleep through but still wake foggy' },
        { id: '3', text: 'My brain feels active even while sleeping' },
        { id: '4', text: 'I dream a lot — maybe too much' },
        { id: '5', text: 'I think my sleep is okay' }
      ]
    }
  ],
  foggy: [
    {
      question: "When you wake up, what do you usually feel first?",
      answers: [
        { id: '1', text: 'Slightly tense — like I\'ve been clenching or holding tension' },
        { id: '2', text: 'Okay, but I don\'t feel deeply rested' },
        { id: '3', text: 'Still a bit anxious or restless' },
        { id: '4', text: 'Like I was moving a lot overnight' },
        { id: '5', text: 'Honestly, I don\'t really think about it' }
      ]
    },
    {
      question: "Do you often notice yourself shifting or adjusting during the night?",
      answers: [
        { id: '1', text: 'Yes — I change positions a lot' },
        { id: '2', text: 'I toss and turn a few times' },
        { id: '3', text: 'Just once or twice' },
        { id: '4', text: 'Only if something wakes me' },
        { id: '5', text: 'I have no idea — maybe?' }
      ]
    },
    {
      question: "How would you describe your body's state when you finally fall asleep?",
      answers: [
        { id: '1', text: 'A little tense or tight' },
        { id: '2', text: 'My mind and body are both racing' },
        { id: '3', text: 'Physically relaxed, mentally alert' },
        { id: '4', text: 'Depends on the night' },
        { id: '5', text: 'I fall asleep without noticing much' }
      ]
    },
    {
      question: "How do you usually feel by mid-morning or early afternoon?",
      answers: [
        { id: '1', text: 'I still feel a bit "off" or heavy' },
        { id: '2', text: 'I pick up energy later in the day' },
        { id: '3', text: 'I feel okay, but a little sluggish' },
        { id: '4', text: 'I\'m alert but easily overwhelmed' },
        { id: '5', text: 'I feel great most of the day' }
      ]
    }
  ],
  tense: [
    {
      question: "When you wake up, what do you usually feel first?",
      answers: [
        { id: '1', text: 'Slightly tense — like I\'ve been clenching or holding tension' },
        { id: '2', text: 'Okay, but I don\'t feel deeply rested' },
        { id: '3', text: 'Still a bit anxious or restless' },
        { id: '4', text: 'Like I was moving a lot overnight' },
        { id: '5', text: 'Honestly, I don\'t really think about it' }
      ]
    },
    {
      question: "Do you often notice yourself shifting or adjusting during the night?",
      answers: [
        { id: '1', text: 'Yes — I change positions a lot' },
        { id: '2', text: 'I toss and turn a few times' },
        { id: '3', text: 'Just once or twice' },
        { id: '4', text: 'Only if something wakes me' },
        { id: '5', text: 'I have no idea — maybe?' }
      ]
    },
    {
      question: "How would you describe your body's state when you finally fall asleep?",
      answers: [
        { id: '1', text: 'A little tense or tight' },
        { id: '2', text: 'My mind and body are both racing' },
        { id: '3', text: 'Physically relaxed, mentally alert' },
        { id: '4', text: 'Depends on the night' },
        { id: '5', text: 'I fall asleep without noticing much' }
      ]
    },
    {
      question: "How do you usually feel by mid-morning or early afternoon?",
      answers: [
        { id: '1', text: 'I still feel a bit "off" or heavy' },
        { id: '2', text: 'I pick up energy later in the day' },
        { id: '3', text: 'I feel okay, but a little sluggish' },
        { id: '4', text: 'I\'m alert but easily overwhelmed' },
        { id: '5', text: 'I feel great most of the day' }
      ]
    }
  ],
  rested: [
    {
      question: "When you wake up feeling rested, how long does that usually last?",
      answers: [
        { id: '1', text: 'Most of the day — I stay energized' },
        { id: '2', text: 'Until late morning, then I dip' },
        { id: '3', text: 'Until lunch, then I feel a bit foggy' },
        { id: '4', text: 'I crash in the afternoon' },
        { id: '5', text: 'I\'m honestly not sure — I don\'t think about it' }
      ]
    },
    {
      question: "Have you ever had a phase where you felt even more refreshed than now?",
      answers: [
        { id: '1', text: 'Yes — there were times I felt incredible' },
        { id: '2', text: 'I think so, but it\'s been a while' },
        { id: '3', text: 'Maybe when I was younger' },
        { id: '4', text: 'I\'m not sure — this feels normal to me' },
        { id: '5', text: 'No — I feel just as good now' }
      ]
    },
    {
      question: "Do you ever notice tension or tightness during the day — even when you feel rested?",
      answers: [
        { id: '1', text: 'Yes — neck, back, or jaw mostly' },
        { id: '2', text: 'Occasionally, especially under stress' },
        { id: '3', text: 'Sometimes after waking up' },
        { id: '4', text: 'Not really' },
        { id: '5', text: 'I\'ve never paid attention to that' }
      ]
    },
    {
      question: "How often do you wake up and feel… truly recharged?",
      answers: [
        { id: '1', text: 'Almost every day' },
        { id: '2', text: 'A few times a week' },
        { id: '3', text: 'Once in a while' },
        { id: '4', text: 'Rarely — but I still function fine' },
        { id: '5', text: 'I\'ve never thought about it that way' }
      ]
    }
  ]
};

export const resultContent: { [key: string]: ResultContent } = {
  tired: {
    title: "Your Body May Be Struggling to Recover While You Sleep",
    subtitle: "Based on your answers, it sounds like you're giving your body time to rest — but not getting the restoration you need. And that tired feeling in the morning? It might not be from your sleep… but from what's happening while you sleep.",
    buttonText: "See what could be quietly draining your energy at night"
  },
  sore: {
    title: "What If That Morning Stiffness Isn't Just 'Getting Older'?",
    subtitle: "Based on your answers, your body may be trying to recover at night — but something could be getting in the way. That stiffness in the morning? It might be a signal, not just a side effect of age.",
    buttonText: "Discover What Could Be Silently Affecting Your Body's Overnight Healing"
  },
  foggy: {
    title: "You May Be Sleeping — But Your Brain Isn't Fully Shutting Down",
    subtitle: "From what you shared, it seems like your body might be resting, but your brain may still be working overtime through the night. That sluggish, heavy, or mentally 'off' feeling in the morning isn't just about sleep — it might be a sign your system isn't fully recovering.",
    buttonText: "Discover What May Be Quietly Draining Your Mental Energy Overnight, LITERALLY"
  },
  tense: {
    title: "Your Body May Be Sleeping — But It's Not Fully Letting Go",
    subtitle: "Based on your answers, it sounds like your body is doing its best to rest… but tension, stress, or even unseen factors may be keeping your system in 'alert mode' — even while you sleep. This can leave you tossing, turning, and waking up feeling like you've run a marathon… even if you were in bed all night.",
    buttonText: "See What May Be Disrupting Your Body's Natural Calm"
  },
  rested: {
    title: "Could Your Body Be Recovering… Just Enough to Survive — But Not Enough to Thrive?",
    subtitle: "You might feel fine now — but that doesn't mean your body isn't working harder than it should. Over time, that quiet effort adds up. Energy runs lower. Recovery slows down. Little aches linger longer. And one day, you realize… this didn't happen overnight.",
    buttonText: "See What May Be Silently Blocking Full Recovery While You Sleep"
  }
};
