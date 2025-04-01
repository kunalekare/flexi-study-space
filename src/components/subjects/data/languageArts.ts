
import React from "react";
import { BookOpen } from "lucide-react";

const languageArtsData = {
  title: "Language Arts",
  description: "Improve literacy skills with text-to-speech, customizable reading formats, and assistive writing tools.",
  icon: React.createElement(BookOpen, { className: "h-6 w-6" }),
  color: "bg-amber-50 dark:bg-amber-900/20",
  textColor: "text-amber-600 dark:text-amber-400",
  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  sections: [
    {
      id: "phonics",
      title: "Phonics & Sight Words",
      content: "Master reading fundamentals with audio-supported exercises that reinforce letter-sound relationships and common word recognition. Multi-sensory approaches support diverse learning needs.",
      lessons: [
        { 
          title: "Letter Sounds", 
          type: "Interactive",  
          duration: "10 mins",
          description: "Learn to identify and produce all letter sounds using visual and auditory cues. Includes multisensory approaches for diverse learners.",
          goals: ["Recognize all 26 letter sounds", "Connect letters to corresponding sounds", "Identify initial sounds in simple words"],
          formats: ["Audio examples", "Interactive letter cards", "Visual mnemonics"]
        },
        { 
          title: "Sight Word Games", 
          type: "Game", 
          duration: "15 mins",
          description: "Practice recognizing high-frequency words through engaging digital games that build automaticity and fluency.",
          goals: ["Memorize 25 common sight words", "Read sight words in isolation", "Identify sight words in simple texts"],
          formats: ["Memory matching", "Word hunts", "Timed challenges"]
        },
        { 
          title: "Blending Sounds", 
          type: "Interactive", 
          duration: "12 mins",
          description: "Practice combining individual sounds to form words with interactive tools that provide immediate feedback.",
          goals: ["Blend CVC word patterns", "Segment words into phonemes", "Build simple words from sounds"],
          formats: ["Virtual sound blocks", "Audio guidance", "Progressive difficulty levels"]
        },
        { 
          title: "Word Recognition", 
          type: "Game", 
          duration: "10 mins",
          description: "Strengthen word recognition skills through gamified activities focusing on word families and patterns.",
          goals: ["Recognize common word patterns", "Build reading fluency", "Connect sounds to printed words"],
          formats: ["Digital word sorting", "Picture-word matching", "Speed reading challenges"]
        },
        { 
          title: "Phonics Basics", 
          type: "Video", 
          duration: "12 mins",
          description: "Comprehensive introduction to phonics principles presented through accessible animations and clear explanations.",
          goals: ["Understand phonics fundamentals", "Learn decoding strategies", "Apply phonics to reading"],
          formats: ["Animated instruction", "Visual examples", "Review quizzes"]
        },
        { 
          title: "Reading Fundamentals", 
          type: "Video", 
          duration: "15 mins",
          description: "Overview of essential reading strategies and skills for beginning readers with scaffolded supports.",
          goals: ["Build reading confidence", "Develop decoding strategies", "Understand print concepts"],
          formats: ["Expert instruction", "Demonstration", "Practice examples"]
        }
      ]
    },
    {
      id: "assistive-tech",
      title: "Assistive Technology",
      content: "Use text-to-speech and speech-to-text tools that help students with reading or writing challenges. These technologies remove barriers to literacy and support independent learning.",
      lessons: [
        { 
          title: "Text-to-Speech Basics", 
          type: "Tutorial", 
          duration: "15 mins",
          description: "Learn how to use text-to-speech tools to support reading comprehension and access written content independently.",
          goals: ["Set up text-to-speech on various devices", "Adjust reading speed and voice", "Use highlighting features"],
          formats: ["Step-by-step guide", "Practice activities", "Troubleshooting tips"]
        },
        { 
          title: "Speech-to-Text Practice", 
          type: "Interactive", 
          duration: "20 mins",
          description: "Guided practice using speech-to-text technology to support writing and expression for students with motor challenges.",
          goals: ["Set up dictation software", "Practice clear dictation", "Edit dictated text"],
          formats: ["Voice training exercises", "Dictation challenges", "Editing practice"]
        },
        { 
          title: "Screen Reader Navigation", 
          type: "Tutorial", 
          duration: "15 mins",
          description: "Comprehensive guide to using screen readers effectively for students with visual impairments or reading disabilities.",
          goals: ["Navigate digital content with keyboard", "Customize screen reader settings", "Access information efficiently"],
          formats: ["Guided navigation exercises", "Keyboard shortcut practice", "Real-world applications"]
        },
        { 
          title: "Digital Writing Tools", 
          type: "Interactive", 
          duration: "25 mins",
          description: "Explore assistive tools for writing including word prediction, specialized keyboards, and grammar support.",
          goals: ["Use word prediction software", "Access specialized keyboards", "Utilize grammar checking tools"],
          formats: ["Interactive demonstrations", "Hands-on practice", "Writing exercises"]
        },
        { 
          title: "Assistive Tech Overview", 
          type: "Video", 
          duration: "10 mins",
          description: "Introduction to the range of assistive technologies available to support literacy development in inclusive classrooms.",
          goals: ["Identify appropriate tools for needs", "Understand available technologies", "Match tools to learning challenges"],
          formats: ["Technology showcase", "Case studies", "Implementation examples"]
        },
        { 
          title: "Digital Reading Tools", 
          type: "Video", 
          duration: "12 mins",
          description: "Overview of digital reading tools that support comprehension, fluency, and engagement for diverse readers.",
          goals: ["Explore e-readers and features", "Use reading tracking tools", "Adjust text for accessibility"],
          formats: ["Product demonstrations", "Feature comparisons", "Setup guides"]
        }
      ]
    },
    {
      id: "storytelling",
      title: "Visual Storytelling",
      content: "Enjoy animated books with subtitles and sign language options that make stories accessible to all. Visual supports enhance comprehension and engagement with literature.",
      lessons: [
        { 
          title: "Interactive Storybook", 
          type: "Story", 
          duration: "15 mins",
          description: "Experience adaptive storybooks with customizable features that support different learning needs and preferences.",
          goals: ["Engage with multimedia stories", "Comprehend narrative elements", "Respond to interactive elements"],
          formats: ["Animated stories", "Interactive elements", "Comprehension checks"]
        },
        { 
          title: "Visual Narrative Creation", 
          type: "Interactive", 
          duration: "25 mins",
          description: "Create visual stories using digital tools that combine images, text, and audio to express ideas and demonstrate comprehension.",
          goals: ["Plan a visual narrative", "Combine text and images", "Create digital stories"],
          formats: ["Storyboarding tools", "Digital creation platform", "Publishing options"]
        },
        { 
          title: "Sign Language Stories", 
          type: "Video", 
          duration: "20 mins",
          description: "Access stories presented with sign language interpretation alongside text and narration for multilingual accessibility.",
          goals: ["Experience bilingual storytelling", "Connect sign to text", "Build visual literacy"],
          formats: ["ASL storytelling", "Captioned video", "Visual story elements"]
        },
        { 
          title: "Sequencing Events", 
          type: "Game", 
          duration: "15 mins",
          description: "Practice organizing story events in logical order through visual sequencing activities with adjustable difficulty levels.",
          goals: ["Identify beginning, middle, end", "Arrange events chronologically", "Understand cause and effect"],
          formats: ["Drag-and-drop sequencing", "Visual timelines", "Story mapping"]
        },
        { 
          title: "Storytelling Techniques", 
          type: "Video", 
          duration: "15 mins",
          description: "Learn effective storytelling strategies that incorporate visuals, gestures, and expressive language to engage diverse audiences.",
          goals: ["Use vocal expression", "Incorporate visual aids", "Engage audience attention"],
          formats: ["Expert demonstrations", "Technique explanations", "Practice suggestions"]
        },
        { 
          title: "Visual Narrative Guide", 
          type: "Video", 
          duration: "10 mins",
          description: "Explore how visual elements enhance storytelling and support comprehension for readers at all levels.",
          goals: ["Understand visual literacy", "Interpret images in stories", "Connect text and illustrations"],
          formats: ["Analysis of examples", "Visual literacy concepts", "Application strategies"]
        }
      ]
    },
    {
      id: "sentence-building",
      title: "Sentence Building",
      content: "Practice language skills with drag-and-drop games that teach sentence structure and grammar in an intuitive, visual way. Adjustable difficulty levels support progressive learning.",
      lessons: [
        { 
          title: "Simple Sentences", 
          type: "Interactive", 
          duration: "15 mins",
          description: "Build basic sentences using subject-verb-object patterns with visual supports and audio feedback.",
          goals: ["Construct simple sentences", "Identify sentence parts", "Use proper capitalization and punctuation"],
          formats: ["Drag-and-drop builder", "Picture supports", "Audio confirmation"]
        },
        { 
          title: "Question Formation", 
          type: "Game", 
          duration: "15 mins",
          description: "Learn to form different types of questions through interactive games with immediate feedback and scaffolding.",
          goals: ["Transform statements to questions", "Use question words appropriately", "Apply correct punctuation"],
          formats: ["Transformation challenges", "Multiple-choice quizzes", "Sentence scrambles"]
        },
        { 
          title: "Descriptive Writing", 
          type: "Interactive", 
          duration: "20 mins",
          description: "Enhance sentences with descriptive language using adjectives, adverbs, and sensory details with visual supports.",
          goals: ["Add descriptive elements", "Use specific vocabulary", "Create vivid sentences"],
          formats: ["Word bank suggestions", "Image-inspired writing", "Model examples"]
        },
        { 
          title: "Grammar Games", 
          type: "Game", 
          duration: "15 mins",
          description: "Practice applying grammar rules through engaging games addressing parts of speech, verb tense, and sentence structure.",
          goals: ["Identify parts of speech", "Use correct verb tenses", "Fix common errors"],
          formats: ["Grammar challenges", "Error correction", "Timed competitions"]
        },
        { 
          title: "Grammar Fundamentals", 
          type: "Video", 
          duration: "12 mins",
          description: "Clear explanation of essential grammar concepts with visual aids and examples for diverse learners.",
          goals: ["Understand basic grammar rules", "Recognize sentence patterns", "Apply rules to writing"],
          formats: ["Animated explanations", "Visual examples", "Practice opportunities"]
        },
        { 
          title: "Writing Workshop", 
          type: "Video", 
          duration: "18 mins",
          description: "Guided writing instruction focusing on sentence variety, clarity, and structure with adaptive supports.",
          goals: ["Compose varied sentence types", "Develop writing fluency", "Self-edit effectively"],
          formats: ["Modeled writing", "Guided practice", "Revision strategies"]
        }
      ]
    }
  ]
};

export default languageArtsData;
