    // =========================================================================
    // 6. FULL 760-QUESTION PRACTICE BANK (Q1-Q265 PRESERVED + Q266-Q760 NEW)
    // =========================================================================
    const READING_STORIES = {
      A: { title: 'Story A — The Lost Kite (For Q1–Q5)', text: 'Maya ran across the breezy hill holding her bright red kite string. Suddenly, a strong gust of wind snapped the string, and the kite drifted into the tall branches of an old oak tree. Maya’s shoulders slumped, and she stared up at the leaves with a quiet sigh. Her older brother Leo walked over carrying a long wooden ladder. "Don\'t worry," Leo smiled. "We will have it flying again before lunch."' },
      B: { title: 'Article B — Amazing Honeybees (For Q6–Q10)', text: 'Honeybees live together in busy colonies inside a hive. Each hive has one queen bee, thousands of female worker bees, and a few hundred drones. Worker bees fly from flower to flower collecting sweet nectar and yellow pollen. When a worker finds a patch of blooming flowers, it returns to the hive and performs a special "waggle dance." The direction and speed of the dance tell the other bees exactly where to fly for food!' },
      C: { title: 'Story C — Midnight in the Attic (For Q11–Q15)', text: 'During a thunderstorm, the lights in Sam’s house flickered out. Sam clutched his flashlight and tiptoed up the creaky attic stairs to find extra candles. Scratch, scratch, scratch! A strange noise echoed from behind an old trunk. Sam froze, his heart thumping like a drum. Slowly, he aimed his beam behind the box—and laughed when he saw Whiskers, his gray kitten, chasing a rolled-up sock.' },
      D: { title: 'Article D — Sea Otters\' Floating Beds (For Q16–Q20)', text: 'Sea otters spend almost their entire lives in the cold ocean water. Unlike whales and seals, sea otters do not have a thick layer of blubber to stay warm. Instead, they have the thickest fur of any animal, with up to one million hairs per square inch! When it is time to sleep, sea otters float on their backs and wrap themselves in long strands of ocean kelp. The kelp acts like an anchor so the waves do not carry them away while they nap.' },
      E: { title: 'Story E — The Science Fair Volcano (For Q21–Q25)', text: 'Priya spent two weeks painting her papier-mâché volcano brown and green. On the morning of the science fair, she poured baking soda into the crater, added red food coloring, and poured in vinegar. Nothing happened! Priya checked her bottles and realized she had grabbed water instead of vinegar. She quickly asked her teacher for a cup of real vinegar, tried again, and cheered as bubbly red "lava" foamed over the sides.' }
    };

    const Q_BANK_DATA = [
      // Q1 - Q25: ENG_LIT
      { n: 1, cat: 'ENG_LIT', sub: 'English: Literature & Informational', story: 'A', q: 'How does Maya feel right after the kite gets stuck, and which clue shows this?', a: 'Disappointed/sad; her shoulders slumped and she sighed' },
      { n: 2, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'What caused the kite string to break?', a: 'A strong gust of wind' },
      { n: 3, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'What can you infer about Leo’s personality from his actions?', a: 'He is kind, helpful, and supportive' },
      { n: 4, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'Where does this story take place (setting)?', a: 'On a breezy hill near an old oak tree' },
      { n: 5, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'What will most likely happen next in the story?', a: 'Leo will climb the ladder to rescue the kite' },
      { n: 6, cat: 'ENG_LIT', sub: 'English: Literature & Informational', story: 'B', q: 'What is the main idea of this nonfiction article?', a: 'Honeybees work together and communicate to gather food for their hive' },
      { n: 7, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'Why does a worker bee perform a "waggle dance"?', a: 'To show other bees the direction and distance to flowers' },
      { n: 8, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'According to the text, what two things do worker bees collect from flowers?', a: 'Nectar and pollen' },
      { n: 9, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'If this article had a bold title above this paragraph, what is that nonfiction text feature called?', a: 'Heading' },
      { n: 10, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'How is "Article B" different from "Story A"?', a: 'Article B gives real science facts; Story A is made-up fiction' },
      { n: 11, cat: 'ENG_LIT', sub: 'English: Literature & Informational', story: 'C', q: 'Why did Sam go up to the attic during the storm?', a: 'To find extra candles after the power went out' },
      { n: 12, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'What does the comparison "his heart thumping like a drum" tell you about Sam?', a: 'He was very scared or nervous' },
      { n: 13, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'How did Sam’s feelings change from the middle of the story to the end?', a: 'He went from frightened to relieved and amused' },
      { n: 14, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'What was actually making the scratching sound behind the trunk?', a: 'His kitten Whiskers playing with a sock' },
      { n: 15, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'Which detail proves this story happens at night or in the dark?', a: 'He needed a flashlight and candles when the lights went out' },
      { n: 16, cat: 'ENG_LIT', sub: 'English: Literature & Informational', story: 'D', q: 'How do sea otters stay warm in cold ocean water without blubber?', a: 'They have the thickest fur of any animal' },
      { n: 17, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'Why do sea otters wrap themselves in kelp before sleeping?', a: 'So ocean waves do not carry them away' },
      { n: 18, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'In the text, what does the author compare kelp to?', a: 'An anchor' },
      { n: 19, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'If a book about sea otters has a small dictionary of bold words in the back, what is that feature called?', a: 'Glossary' },
      { n: 20, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'Which detail supports the fact that sea otters have super-thick fur?', a: 'Up to one million hairs per square inch' },
      { n: 21, cat: 'ENG_LIT', sub: 'English: Literature & Informational', story: 'E', q: 'What problem did Priya face at the science fair?', a: 'Her volcano did not erupt because she used water instead of vinegar' },
      { n: 22, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'How did Priya solve her problem?', a: 'She got real vinegar from her teacher and tried again' },
      { n: 23, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'What lesson or theme does this story teach?', a: 'Check your work carefully and don\'t give up when mistakes happen' },
      { n: 24, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'Put these events in order: (A) Red foam erupted. (B) Priya painted the volcano. (C) She poured water by mistake.', a: 'B, C, A' },
      { n: 25, cat: 'ENG_LIT', sub: 'English: Literature & Informational', q: 'How is Priya like Leo from Story A?', a: 'Both stay calm and solve problems instead of giving up' },

      // Q26 - Q50: ENG_VOC
      { n: 26, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Multiple Meaning (Bark): What does bark mean in "The rough tree bark scratched my arm" vs. "The puppy began to bark"?', a: 'Outer tree covering vs. dog sound' },
      { n: 27, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Multiple Meaning (Bat): Give two meanings for bat: "He swung the wooden bat" vs. "A bat flew out of the cave."', a: 'Sports stick vs. flying mammal' },
      { n: 28, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Multiple Meaning (Wave): What does wave mean in "A huge ocean wave splashed us" vs. "I wave goodbye to Mom"?', a: 'Moving water vs. hand gesture' },
      { n: 29, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Multiple Meaning (Light): Explain light in "This empty box is very light" vs. "Please turn on the bedroom light."', a: 'Not heavy vs. lamp/brightness' },
      { n: 30, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Multiple Meaning (Watch): Explain watch in "Look at my new wrist watch" vs. "Let\'s watch the parade."', a: 'Timepiece vs. observe/look at' },
      { n: 31, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Prefix (un-): What does unfair mean if fair means treating everyone equally?', a: 'Not fair' },
      { n: 32, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Prefix (re-): If you reread a chapter, what are you doing?', a: 'Reading it again' },
      { n: 33, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Prefix (pre-): What does the prefix pre- mean in preheat and preview?', a: 'Before (heat before; view before)' },
      { n: 34, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Prefix (dis-): What happens when a magician makes a rabbit disappear?', a: 'It stops being visible / vanishes' },
      { n: 35, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Prefix (mis-): If you misspell a word, what did you do?', a: 'Spelled it wrongly' },
      { n: 36, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Suffix (-ful): What does joyful mean?', a: 'Full of joy' },
      { n: 37, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Suffix (-less): What is the difference between fearful and fearless?', a: 'Full of fear vs. without fear' },
      { n: 38, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Suffix (-er): Adding -er to teach makes teacher. What does -er mean here?', a: 'A person who teaches' },
      { n: 39, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Suffix (-ly): How does -ly change brave in "She spoke bravely"?', a: 'In a brave way' },
      { n: 40, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Context Clues: "The desert was arid, with cracked dirt and no rain for months." What does arid mean?', a: 'Very dry' },
      { n: 41, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Context Clues: "The famished puppy gobbled up its entire bowl of food in ten seconds." What does famished mean?', a: 'Extremely hungry' },
      { n: 42, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Context Clues: "Glass is fragile, so carry the vase gently so it won\'t shatter." What does fragile mean?', a: 'Easily broken' },
      { n: 43, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Context Clues: "After hiking up the steep mountain, the campers were exhausted and fell asleep right away." What does exhausted mean?', a: 'Very tired' },
      { n: 44, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Synonyms: Which word is a synonym for enormous: tiny, gigantic, narrow, or swift?', a: 'gigantic' },
      { n: 45, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Synonyms: Replace smart with a stronger synonym: "The smart fox solved the puzzle."', a: 'clever / intelligent' },
      { n: 46, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Antonyms: What is an antonym (opposite) for ancient?', a: 'modern / new / young' },
      { n: 47, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Antonyms: What is an antonym for generous?', a: 'selfish / greedy / stingy' },
      { n: 48, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Shades of Meaning: Order these from coldest to warmest: warm, freezing, hot, cool.', a: 'freezing, cool, warm, hot' },
      { n: 49, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Shades of Meaning: Order these from slowest to fastest: sprint, stroll, jog, crawl.', a: 'crawl, stroll, jog, sprint' },
      { n: 50, cat: 'ENG_VOC', sub: 'English: Vocabulary Use & Functions', q: 'Categorizing Words: Which word does not belong and why: apple, banana, carrot, grape?', a: 'carrot (vegetable; others are fruits)' },

      // Q51 - Q75: ENG_PHO
      { n: 51, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Syllables: How many syllables are in unbelievable? Break it apart.', a: '5; un-be-liev-a-ble' },
      { n: 52, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Syllables: Clap and count the syllables in watermelon and butterfly.', a: 'wa-ter-mel-on (4); but-ter-fly (3)' },
      { n: 53, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Syllables: Break hippopotamus into syllables.', a: 'hip-po-pot-a-mus (5)' },
      { n: 54, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Compound Words: Split sunflower and lighthouse into their two root words.', a: 'sun+flower; light+house' },
      { n: 55, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Compound Words: Combine two words to make a word meaning "a box for mail."', a: 'mailbox' },
      { n: 56, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Long Vowel Teams: Which long vowel sound do rain, tray, and eight share?', a: 'Long A' },
      { n: 57, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Long Vowel Teams: Which long vowel sound do boat, snow, and toe share?', a: 'Long O' },
      { n: 58, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Long Vowel Teams: Identify the vowel team making the Long E sound in beach and wheel.', a: 'ea; ee' },
      { n: 59, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Diphthongs (ou/ow): Read cloud and clown. What vowel sound do ou and ow make?', a: '/ow/ sound' },
      { n: 60, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Diphthongs (oi/oy): Choose the correct spelling: c__n (oi/oy) and t__ (oi/oy).', a: 'coin; toy' },
      { n: 61, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'R-Controlled Vowels: Underline the r-controlled vowel pair in shark, storm, and turtle.', a: 'ar, or, ur' },
      { n: 62, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'R-Controlled Vowels: Which word has the same vowel sound as bird: barn, fern, or fork?', a: 'fern (er/ir sound)' },
      { n: 63, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Silent Letters: Which letter is silent in knight, wrist, and lamb?', a: 'k, w, b' },
      { n: 64, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Silent E (Magic E): How does adding silent e change cub to cube and tap to tape?', a: 'Changes short vowel to long vowel' },
      { n: 65, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Hard vs. Soft C: Does c make a hard /k/ or soft /s/ sound in city vs. camel?', a: 'city = soft /s/; camel = hard /k/' },
      { n: 66, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Hard vs. Soft G: Does g make a hard /g/ or soft /j/ sound in giraffe vs. garden?', a: 'giraffe = soft /j/; garden = hard /g/' },
      { n: 67, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Consonant Blends/Digraphs: What is the difference between a blend (bl in blue) and a digraph (sh in ship)?', a: 'Blend keeps both sounds; digraph makes 1 new sound' },
      { n: 68, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Homophones (to/too/two): "I ate ___ (to/too/two) cookies, and my sister ate some ___ (to/too/two)."', a: 'two; too' },
      { n: 69, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Homophones (there/their/they\'re): "___ (There/Their/They\'re) going to park ___ (there/their/they\'re) car over ___."', a: 'They\'re; their; there' },
      { n: 70, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Homophones (sea/see): Pick the right words: "We can ___ (sea/see) whales in the blue ___ (sea/see)."', a: 'see; sea' },
      { n: 71, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Inflectional Endings (-ed): Which -ed word ends with a /t/ sound: jumped, played, or landed?', a: 'jumped' },
      { n: 72, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Doubling Consonant Rule: Spell hop + ing and run + er correctly.', a: 'hopping; runner' },
      { n: 73, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Drop-E Rule: Spell bake + ing and smile + ed correctly.', a: 'baking; smiled' },
      { n: 74, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Y-to-I Rule: Change baby and puppy into plurals (more than one).', a: 'babies; puppies' },
      { n: 75, cat: 'ENG_PHO', sub: 'English: Foundational Skills & Phonics', q: 'Alphabetical Order: Put these words in ABC order: grape, giant, garden, globe.', a: 'garden, giant, globe, grape' },

      // Q76 - Q100: ENG_GRA
      { n: 76, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Commas in a Series: Fix punctuation: "We packed sandwiches juice boxes and apples."', a: 'sandwiches, juice boxes, and apples.' },
      { n: 77, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Commas in Dates: Where does the comma go in "December 4 2026"?', a: 'December 4, 2026' },
      { n: 78, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Commas in Cities/States: Fix: "Saanvi lives in Arlington Heights Illinois."', a: 'Arlington Heights, Illinois.' },
      { n: 79, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Commas in Letters: Add commas: "Dear Grandma / Love Saanvi"', a: 'Dear Grandma, / Love, Saanvi' },
      { n: 80, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Contractions: Write contractions for do not, cannot, and will not.', a: 'don\'t, can\'t, won\'t' },
      { n: 81, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Contractions: Expand these contractions into two words: she\'s, they\'ve, I\'m.', a: 'she is/has, they have, I am' },
      { n: 82, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Singular Possessives: Show that the bone belongs to one dog: "the ___ bone" (dogs / dog\'s / dogs\').', a: 'dog\'s' },
      { n: 83, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Plural Possessives: Show that the classroom belongs to many students: "the ___ classroom" (student\'s / students\').', a: 'students\'' },
      { n: 84, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Nouns (Common vs. Proper): Which words need capital letters: "on monday, we visited lincoln park zoo."', a: 'On, Monday, Lincoln Park Zoo' },
      { n: 85, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Collective Nouns: Match the group word: a ___ of fish (flock / school / herd).', a: 'school' },
      { n: 86, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Action Verbs: Find the verb: "The green frog leaped across the pond."', a: 'leaped' },
      { n: 87, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Linking Verbs: Identify the linking verb in "The soup smells delicious."', a: 'smells' },
      { n: 88, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Adjectives: Find two adjectives: "The fluffy white rabbit nibbled a crunchy carrot."', a: 'fluffy, white, crunchy (any 2)' },
      { n: 89, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Adverbs: Find the adverb that tells how: "The turtle walked slowly."', a: 'slowly' },
      { n: 90, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Adjective vs. Adverb: Choose the right word: "She sang ___ (sweet / sweetly) at the concert."', a: 'sweetly' },
      { n: 91, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Pronouns: Replace the underlined names: "Leo and Maya rode Leo and Maya\'s bikes."', a: 'They; their' },
      { n: 92, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Reflexive Pronouns: "I tied my shoes all by ___ (myself / himself)."', a: 'myself' },
      { n: 93, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Irregular Past Tense: Fix the verb: "Yesterday, she runned fast and catched the ball."', a: 'ran; caught' },
      { n: 94, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Irregular Past Tense: Write the past tense of go, eat, and write.', a: 'went, ate, wrote' },
      { n: 95, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Irregular Plurals: Write the plural of child, tooth, mouse, and foot.', a: 'children, teeth, mice, feet' },
      { n: 96, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Subject-Verb Agreement: Choose the right verb: "The dogs ___ (bark / barks) at the mailman."', a: 'bark' },
      { n: 97, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Quotation Marks: Add quotation marks: Mom asked, Did you finish your homework?', a: 'Mom asked, "Did you finish your homework?"' },
      { n: 98, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Compound Sentences: Combine with and, but, or so: "It started to rain. We opened our umbrella."', a: 'It started to rain, so we opened our umbrella.' },
      { n: 99, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Sentence Types: Is "Watch out for that puddle!" a statement, question, or exclamation?', a: 'Exclamation' },
      { n: 100, cat: 'ENG_GRA', sub: 'English: Language & Writing Mechanics', q: 'Sentence Expansion: Expand "The bird sang." by adding an adjective and telling when or where.', a: 'e.g., "The tiny blue bird sang in the tall oak tree."' },

      // Q101 - Q141: MATH_OA
      { n: 101, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Saanvi had 14 stickers. She gave 5 to her brother, and her teacher gave her 8 more. How many does she have now?', a: '17' },
      { n: 102, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Leo found 24 shells in the morning and 13 in the afternoon. Maya found 30 total. Who has more, and by how many?', a: 'Leo, 7 more' },
      { n: 103, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'A bus has 32 riders. At the first stop, 9 get off and 6 get on. How many riders are on the bus now?', a: '29' },
      { n: 104, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'There are 45 books on a shelf. Kids borrow 18, and the librarian adds 12 new ones. How many books are there now?', a: '39' },
      { n: 105, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Missing Addend: 19 + ___ = 34', a: '15' },
      { n: 106, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Missing Subtrahend: 50 − ___ = 28', a: '22' },
      { n: 107, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Missing Start: ___ − 14 = 27', a: '41' },
      { n: 108, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Mental Math Fluency: Solve 18 + 7 − 5 mentally.', a: '20' },
      { n: 109, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Mental Doubles +1: Use 8 + 8 = 16 to solve 8 + 9 quickly.', a: '17' },
      { n: 110, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Make-a-Ten Strategy: Solve 9 + 7 by making 10 first.', a: '10 + 6 = 16' },
      { n: 111, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Even or Odd: Is the sum of 14 + 9 even or odd?', a: 'Odd (23)' },
      { n: 112, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Even + Even Rule: Is the sum of any two even numbers always even or odd?', a: 'Always even' },
      { n: 113, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Odd + Odd Rule: Is the sum of any two odd numbers always even or odd?', a: 'Always even' },
      { n: 114, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Array Addition: 3 rows of 4 toy cars. Write a repeated addition equation.', a: '4 + 4 + 4 = 12' },
      { n: 115, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Array Multiplication: 5 rows of 3 stars. How many stars in total?', a: '15' },
      { n: 116, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Array Columns: 4 columns of 6 chairs. How many chairs altogether?', a: '24' },
      { n: 117, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Equal Groups: 4 baskets with 6 apples in each basket. How many apples altogether?', a: '24' },
      { n: 118, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Equal Groups: 7 packs of pencils with 5 pencils in each pack. Total pencils?', a: '35' },
      { n: 119, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Equal Sharing (Early Division): Share 18 cookies equally among 3 friends. How many does each get?', a: '6' },
      { n: 120, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Equal Sharing: 20 crayons divided equally into 5 boxes. How many per box?', a: '4' },
      { n: 121, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Equal Sharing: 24 stickers shared equally among 4 kids. How many each?', a: '6' },
      { n: 122, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Skip-Counting by 3s: 12, 15, 18, ___, ___, 27, ___', a: '21, 24, 30' },
      { n: 123, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Skip-Counting by 4s: 8, 12, 16, ___, ___, 28', a: '20, 24' },
      { n: 124, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Skip-Counting by 25s: 25, 50, ___, 100, ___, 150', a: '75, 125' },
      { n: 125, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Skip-Counting Backward by 10s: 130, 120, ___, 100, ___, 80', a: '110, 90' },
      { n: 126, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Number Pattern Rule: What is the rule for 45, 40, 35, 30, 25?', a: 'Subtract 5' },
      { n: 127, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Growing Pattern: 2, 4, 7, 11, 16, ___ (Hint: +2, +3, +4...)', a: '22' },
      { n: 128, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Input-Output Machine: Rule is "Add 9". If Input = 16, what is Output?', a: '25' },
      { n: 129, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Input-Output Machine: Rule is "Subtract 7". If Output = 18, what was Input?', a: '25' },
      { n: 130, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Balance Equations: 12 + 8 = 15 + ___', a: '5' },
      { n: 131, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Balance Equations: 30 − 6 = 20 + ___', a: '4' },
      { n: 132, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Fact Family: Write 2 subtraction facts using 7, 8, and 15.', a: '15−7=8; 15−8=7' },
      { n: 133, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Word Problem: Sam has 3 packs of 10 cards and 7 single cards. How many cards in all?', a: '37' },
      { n: 134, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Comparison Word Problem: Maya read 28 pages. Leo read 13 fewer pages than Maya. How many did Leo read?', a: '15' },
      { n: 135, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Multi-Step Word Problem: A farmer has 12 hens and 8 ducks. Each bird lays 1 egg. If 5 eggs break, how many are left?', a: '15' },
      { n: 136, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Multi-Step Shopping: Leo buys 2 books at $6 each and a bookmark for $3. How much change from $20?', a: '$5' },
      { n: 137, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Doubling & Halving: What is double 18? What is half of 34?', a: '36; 17' },
      { n: 138, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Missing Factor (Array): An array has 24 tiles and 4 equal rows. How many tiles are in each row?', a: '6' },
      { n: 139, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Number Riddle: I am an odd number between 40 and 50. My digits add up to 11. What number am I?', a: '47' },
      { n: 140, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'True or False Equation: Is 17 + 8 = 30 − 5 true or false?', a: 'True (25 = 25)' },
      { n: 141, cat: 'MATH_OA', sub: 'Math: Operations & Algebraic Thinking', q: 'Pattern Prediction: In the pattern A, B, C, A, B, C..., what is the 14th letter?', a: 'B' },

      // Q142 - Q182: MATH_NO
      { n: 142, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'What 3-digit number has 3 hundreds, 4 tens, and 8 ones?', a: '348' },
      { n: 143, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'What is the value of the digit 6 in 692?', a: '600' },
      { n: 144, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'What is the value of the digit 7 in 475?', a: '70' },
      { n: 145, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'What number is equal to 5 hundreds, 0 tens, and 9 ones?', a: '509' },
      { n: 146, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Write 742 in expanded form.', a: '700 + 40 + 2' },
      { n: 147, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Write 800 + 30 + 5 in standard form.', a: '835' },
      { n: 148, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Write 416 in word form.', a: 'Four hundred sixteen' },
      { n: 149, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Regrouping Place Value: How many tens are in 140?', a: '14 tens' },
      { n: 150, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Regrouping Place Value: How many tens are in 300?', a: '30 tens' },
      { n: 151, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Regrouping Place Value: 2 hundreds and 15 tens equals what number?', a: '350' },
      { n: 152, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Regrouping Place Value: 4 hundreds, 12 tens, and 3 ones equals what number?', a: '523' },
      { n: 153, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Compare using <, >, or =: 482 ___ 428', a: '>' },
      { n: 154, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Compare using <, >, or =: 605 ___ 650', a: '<' },
      { n: 155, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Compare using <, >, or =: 300 + 40 + 9 ___ 349', a: '=' },
      { n: 156, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Order from least to greatest: 391, 319, 913, 193.', a: '193, 319, 391, 913' },
      { n: 157, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Largest 3-Digit Number: Make the largest 3-digit number using digits 2, 8, 5.', a: '852' },
      { n: 158, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Smallest 3-Digit Number: Make the smallest 3-digit number using digits 7, 1, 4.', a: '147' },
      { n: 159, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'What is 10 more than 294?', a: '304' },
      { n: 160, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'What is 10 less than 403?', a: '393' },
      { n: 161, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'What is 100 more than 678?', a: '778' },
      { n: 162, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'What is 100 less than 512?', a: '412' },
      { n: 163, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '2-Digit Addition (No Regrouping): 45 + 23 = ___', a: '68' },
      { n: 164, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '2-Digit Addition (With Regrouping): 38 + 27 = ___', a: '65' },
      { n: 165, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '2-Digit Addition (With Regrouping): 69 + 25 = ___', a: '94' },
      { n: 166, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Add Four 2-Digit Numbers: 15 + 22 + 15 + 18 = ___', a: '70' },
      { n: 167, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '2-Digit Subtraction (No Regrouping): 87 − 34 = ___', a: '53' },
      { n: 168, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '2-Digit Subtraction (With Regrouping): 52 − 18 = ___', a: '34' },
      { n: 169, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '2-Digit Subtraction (With Regrouping): 71 − 46 = ___', a: '25' },
      { n: 170, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Subtract Across Zeros: 60 − 24 = ___', a: '36' },
      { n: 171, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Subtract Across Zeros: 100 − 43 = ___', a: '57' },
      { n: 172, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '3-Digit Addition: 245 + 132 = ___', a: '377' },
      { n: 173, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '3-Digit Addition (Regrouping): 356 + 128 = ___', a: '484' },
      { n: 174, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '3-Digit Subtraction: 479 − 235 = ___', a: '244' },
      { n: 175, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '3-Digit Subtraction (Regrouping): 542 − 218 = ___', a: '324' },
      { n: 176, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Rounding to Nearest 10: Is 67 closer to 60 or 70? What about 143?', a: '70; 140' },
      { n: 177, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Place Value Riddle: I have 6 tens, 4 hundreds, and 2 more ones than tens. What number am I?', a: '468' },
      { n: 178, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Mental Addition (Compensation): Solve 49 + 36 by thinking 50 + 35.', a: '85' },
      { n: 179, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Mental Subtraction (Constant Difference): Solve 83 − 29 by adding 1 to both numbers (84 − 30).', a: '54' },
      { n: 180, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: '3-Digit Subtraction Across Zeros: 400 − 156 = ___', a: '244' },
      { n: 181, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Rounding to Nearest 100: Is 349 closer to 300 or 400? What about 652?', a: '300; 700' },
      { n: 182, cat: 'MATH_NO', sub: 'Math: Number & Operations', q: 'Number Line Jump: Start at 275, jump forward 40, then jump back 15. Where do you land?', a: '300' },

      // Q183 - Q223: MATH_MD
      { n: 183, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Coin Value: How much is 2 quarters, 1 dime, and 3 pennies?', a: '63¢' },
      { n: 184, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Coin Value: How much is 3 quarters, 2 nickels, and 4 pennies?', a: '89¢' },
      { n: 185, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Coin Value: How much is 1 quarter, 4 dimes, and 3 nickels?', a: '80¢' },
      { n: 186, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Dollar Equivalence: How many dimes make $1.00? How many nickels make $1.00?', a: '10 dimes; 20 nickels' },
      { n: 187, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Counting Over $1: 4 quarters, 3 dimes, and 1 nickel equals how much?', a: '$1.35' },
      { n: 188, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Counting Over $1: One $1 bill, 2 quarters, 1 dime, and 2 pennies equals?', a: '$1.62' },
      { n: 189, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Making Change: A sticker costs 35¢. You pay with 2 quarters (50¢). What is your change?', a: '15¢' },
      { n: 190, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Making Change: A book costs $1.25. You pay with two $1 bills. How much change do you get?', a: '75¢' },
      { n: 191, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Coin Combinations: Show two ways to make 40¢ using coins.', a: 'e.g., 4 dimes; 1 quarter + 1 dime + 1 nickel' },
      { n: 192, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Fewest Coins: What is the fewest number of coins needed to make 65¢?', a: '4 coins (2 quarters, 1 dime, 1 nickel)' },
      { n: 193, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Analog Clock: Hour hand just past 4, minute hand on 9. What time is it?', a: '4:45' },
      { n: 194, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Analog Clock: Hour hand between 7 and 8, minute hand on 6. What time is it?', a: '7:30' },
      { n: 195, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Analog Clock: Hour hand just past 10, minute hand on 3. What time is it?', a: '10:15' },
      { n: 196, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Analog Clock: Hour hand almost at 6, minute hand on 11. What time is it?', a: '5:55' },
      { n: 197, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Analog Clock: Hour hand just past 2, minute hand on 4. What time is it?', a: '2:20' },
      { n: 198, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Elapsed Time: Soccer starts at 3:15 PM and lasts 30 minutes. When does it end?', a: '3:45 PM' },
      { n: 199, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Elapsed Time: Reading starts at 1:40 PM and ends at 2:00 PM. How many minutes passed?', a: '20 min' },
      { n: 200, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Elapsed Time: A movie starts at 4:00 PM and is 1 hour and 15 minutes long. End time?', a: '5:15 PM' },
      { n: 201, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Calendar Time: How many days are in 3 weeks? How many months are in 2 years?', a: '21 days; 24 months' },
      { n: 202, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'AM vs. PM: Do you eat breakfast at 7:30 AM or 7:30 PM?', a: '7:30 AM' },
      { n: 203, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Unit Estimation: Measure a classroom length in inches, feet, or miles?', a: 'Feet' },
      { n: 204, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Unit Estimation: Measure a crayon length in centimeters or meters?', a: 'Centimeters' },
      { n: 205, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Unit Conversion: How many inches are in 1 foot? How many inches in 3 feet (1 yard)?', a: '12 in; 36 in' },
      { n: 206, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Unit Conversion: How many centimeters are in 1 meter? How many in 2 meters?', a: '100 cm; 200 cm' },
      { n: 207, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Ruler Measurement: A ribbon starts at the 2-inch mark and ends at the 9-inch mark. How long is it?', a: '7 inches' },
      { n: 208, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Ruler Measurement: A pencil starts at 3 cm and ends at 17 cm. How long is it?', a: '14 cm' },
      { n: 209, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Length Comparison: A red rope is 45 cm long. A blue rope is 28 cm long. How much longer is the red rope?', a: '17 cm' },
      { n: 210, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Weight & Temperature: Which is heavier: 1 pound of feathers or 1 pound of rocks?', a: 'Neither—both weigh 1 pound!' },
      { n: 211, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Temperature Reading: Water freezes at 32°F. If it is 20°F outside, is it above or below freezing?', a: 'Below freezing' },
      { n: 212, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Bar Graph: 11 kids chose Dogs, 7 chose Cats, 4 chose Fish. How many more chose Dogs than Fish?', a: '7 more' },
      { n: 213, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Bar Graph: Using the data above, how many kids voted in all?', a: '22 kids' },
      { n: 214, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Bar Graph: How many fewer kids chose Fish than Cats?', a: '3 fewer' },
      { n: 215, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Picture Graph: Each star symbol = 2 books read. If Saanvi has 6 stars, how many books did she read?', a: '12 books' },
      { n: 216, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Picture Graph: Each apple = 5 apples picked. How many symbols represent 20 apples?', a: '4 symbols' },
      { n: 217, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Line Plot: On a line plot of pencil lengths, there are 4 X\'s above 5 inches and 2 X\'s above 6 inches. How many pencils were measured?', a: '6 pencils' },
      { n: 218, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Coin Puzzle: Saanvi has 5 coins that equal 46¢. What are the 5 coins?', a: '1 quarter, 2 dimes, 1 penny' },
      { n: 219, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Elapsed Time (Across Hour): Art class starts at 10:45 AM and lasts 35 minutes. When does it end?', a: '11:20 AM' },
      { n: 220, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Time Equivalence: How many minutes are in 1 and a half hours?', a: '90 minutes' },
      { n: 221, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Metric Length Comparison: Which is longer: 1 meter or 85 centimeters, and by how much?', a: '1 meter, by 15 cm' },
      { n: 222, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Liquid Capacity: Which holds more water: a 1-cup mug, a 1-quart bottle, or a 1-gallon jug?', a: '1-gallon jug' },
      { n: 223, cat: 'MATH_MD', sub: 'Math: Measurement & Data', q: 'Tally Chart Analysis: Red has 3 five-tallies + 2 marks; Blue has 2 five-tallies + 4 marks. How many total?', a: '17 + 14 = 31' },

      // Q224 - Q265: MATH_GEO
      { n: 224, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Partitioning: Divide a rectangle into 3 equal shares. What is one share called?', a: 'One-third' },
      { n: 225, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Partitioning: How many fourths make 1 whole pizza? How many thirds make 1 whole?', a: '4 fourths; 3 thirds' },
      { n: 226, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Fraction Size: Which is larger: one-half of a brownie or one-fourth of the same brownie?', a: 'One-half' },
      { n: 227, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Fraction Size: Which is smaller: one-third of a pie or one-half of the same pie?', a: 'One-third' },
      { n: 228, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Shaded Fractions: A circle has 4 equal parts and 3 are shaded. What fraction is shaded?', a: '3/4 (three-fourths)' },
      { n: 229, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Unshaded Fractions: A bar has 3 equal parts and 1 is shaded. What fraction is NOT shaded?', a: '2/3 (two-thirds)' },
      { n: 230, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Equal Shares Concept: Two squares are the same size. Square A is cut into 2 equal triangles; Square B is cut into 2 equal rectangles. Do one triangle and one rectangle have the same area?', a: 'Yes, both are 1/2 of the square' },
      { n: 231, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Polygon Sides: How many sides and angles does a hexagon have?', a: '6 sides, 6 angles' },
      { n: 232, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Polygon Sides: What is the name of a closed shape with 5 straight sides?', a: 'Pentagon' },
      { n: 233, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Polygon Sides: How many sides does an octagon (like a stop sign) have?', a: '8 sides' },
      { n: 234, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Polygon Sides: What is a 3-sided polygon called? How many angles does it have?', a: 'Triangle; 3 angles' },
      { n: 235, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Quadrilaterals: Name 4 shapes that are quadrilaterals (4 sides).', a: 'Square, rectangle, trapezoid, rhombus' },
      { n: 236, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Square vs. Rectangle: Why is every square also a rectangle?', a: 'It has 4 sides and 4 square corners (right angles)' },
      { n: 237, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Rhombus vs. Square: How is a rhombus different from a square?', a: 'A rhombus has 4 equal sides, but its corners don\'t have to be right angles' },
      { n: 238, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Trapezoid Attribute: How many pairs of parallel sides does a trapezoid have?', a: 'Exactly 1 pair' },
      { n: 239, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Parallel Lines: How many pairs of parallel sides does a rectangle have?', a: '2 pairs' },
      { n: 240, cat: 'MATH_GEO', sub: 'Math: Geometry', q: '3D Shapes: How many flat faces, edges, and vertices does a cube have?', a: '6 faces, 12 edges, 8 vertices' },
      { n: 241, cat: 'MATH_GEO', sub: 'Math: Geometry', q: '3D Shapes: How many faces and vertices does a rectangular prism (cereal box) have?', a: '6 faces, 8 vertices' },
      { n: 242, cat: 'MATH_GEO', sub: 'Math: Geometry', q: '3D Shapes: How many faces and vertices does a sphere have?', a: '0 faces, 0 vertices' },
      { n: 243, cat: 'MATH_GEO', sub: 'Math: Geometry', q: '3D Shapes: What shape is the flat bottom face of a cone or cylinder?', a: 'Circle' },
      { n: 244, cat: 'MATH_GEO', sub: 'Math: Geometry', q: '3D Shapes: Which 3D shape has 1 square base and 4 triangular faces meeting at a point?', a: 'Square pyramid' },
      { n: 245, cat: 'MATH_GEO', sub: 'Math: Geometry', q: '3D Rolling vs. Stacking: Which 3D shape can both roll on its side and stack on its flat ends?', a: 'Cylinder' },
      { n: 246, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Shape Composition: Put 2 identical right triangles together along their longest side. What shape do you get?', a: 'Rectangle or square' },
      { n: 247, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Shape Composition: How many equilateral triangles are needed to build 1 regular hexagon?', a: '6 triangles' },
      { n: 248, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Shape Composition: Put 2 trapezoids together along their longest base. What 6-sided shape do you form?', a: 'Hexagon' },
      { n: 249, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Shape Decomposition: Cut a square diagonally from corner to corner. What two shapes are formed?', a: '2 triangles' },
      { n: 250, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Lines of Symmetry: How many lines of symmetry does a butterfly shape usually have?', a: '1 vertical line' },
      { n: 251, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Lines of Symmetry: Does the letter H have a vertical line of symmetry, horizontal, or both?', a: 'Both' },
      { n: 252, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Lines of Symmetry: How many lines of symmetry does a regular square have?', a: '4 lines' },
      { n: 253, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Grid Rows & Columns (Area Intro): A rectangle is tiled with 3 rows and 5 columns of unit squares. How many squares in total?', a: '15 squares' },
      { n: 254, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Area Counting: A rug is covered by 4 rows of 4 square tiles. What is its area in square units?', a: '16 square units' },
      { n: 255, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Perimeter Intro: Find the distance around a square whose sides are each 4 inches long.', a: '16 inches' },
      { n: 256, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Perimeter Intro: Find the perimeter of a triangle with sides 3 cm, 4 cm, and 5 cm.', a: '12 cm' },
      { n: 257, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Right Angles: How many square corners (right angles) does a rectangle have?', a: '4' },
      { n: 258, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Spatial Reasoning: If you trace the bottom of a soup can on paper, what 2D shape do you draw?', a: 'Circle' },
      { n: 259, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Fraction on a Number Line: On a number line from 0 to 1 divided into 4 equal jumps, what fraction is at the 2nd tick mark?', a: '2/4 (or 1/2)' },
      { n: 260, cat: 'MATH_GEO', sub: 'Math: Geometry', q: '3D Edge Comparison: Which has more edges: a triangular prism (9 edges) or a square pyramid (8 edges)?', a: 'Triangular prism' },
      { n: 261, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Congruent Shapes: What does it mean if two shapes are congruent?', a: 'Same size and same shape' },
      { n: 262, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Coordinate Grid Intro: Start at (0,0), move 3 steps right and 4 steps up. What point are you at?', a: '(3, 4)' },
      { n: 263, cat: 'MATH_GEO', sub: 'Math: Geometry', q: '3D Net Recognition: If you unfold a cardboard cube flat, how many connected squares do you see?', a: '6 squares' },
      { n: 264, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Angle Comparison: Is the corner of a triangle smaller than, equal to, or larger than a right angle if all sides are equal?', a: 'Smaller (acute, 60°)' },
      { n: 265, cat: 'MATH_GEO', sub: 'Math: Geometry', q: 'Tiling Without Gaps: Why do squares and hexagons tile a floor with no gaps, while circles leave gaps?', a: 'Straight edges meet cleanly; curved edges leave spaces' }
    ];

    // Dynamically expand Q_BANK_DATA from Q266 to Q760 (+495 new questions across Circles, Series, Beast Academy 1B/1C/1D, English Word Series & Science)
    (function appendExpandedQuestions() {
      let nextN = 266;
      const push = (cat, sub, q, a) => Q_BANK_DATA.push({ n: nextN++, cat, sub, q, a });

      // 1. MATH_CIR: Circles & Curves (60 Qs: Q266 - Q325)
      for (let i = 1; i <= 60; i++) {
        const r = (i % 15) + 2, d = r * 2;
        if (i % 4 === 1) push('MATH_CIR', 'Math: Circles & Curves', `Circle Radius → Diameter: A round clock has a radius of ${r} inches. What is its diameter?`, `${d} inches (d = 2 × ${r})`);
        else if (i % 4 === 2) push('MATH_CIR', 'Math: Circles & Curves', `Circle Diameter → Radius: A bicycle tire has a diameter of ${d} inches. What is its radius?`, `${r} inches (r = ${d} ÷ 2)`);
        else if (i % 4 === 3) push('MATH_CIR', 'Math: Circles & Curves', `Circle Vocabulary #${i}: What is the total distance all the way around the outside edge of a circle called?`, `Circumference`);
        else push('MATH_CIR', 'Math: Circles & Curves', `Semicircle & Chord #${i}: How many quarter-circles make 1 whole circle? What is the longest chord in a circle?`, `4 quarter-circles; Diameter`);
      }

      // 2. MATH_PAT: Number Patterns & Series (75 Qs: Q326 - Q400)
      for (let i = 1; i <= 40; i++) {
        const step = (i % 8) + 2, start = i * 3;
        push('MATH_PAT', 'Math: Number Patterns & Series', `Number Series: Find the missing number: ${start}, ${start + step}, ${start + step * 2}, ___, ${start + step * 4} (Rule: +${step})`, `${start + step * 3}`);
      }
      for (let i = 1; i <= 35; i++) {
        const b = i * 2;
        push('MATH_PAT', 'Math: Number Patterns & Series', `Growing Jump Series (+2, +3, +4, +5): ${b}, ${b + 2}, ${b + 5}, ${b + 9}, ___`, `${b + 14}`);
      }

      // 3. BEAST_1B: Beast Academy 1B (60 Qs: Q401 - Q460)
      for (let i = 1; i <= 20; i++) {
        const o1 = 11 + i * 2, o2 = 23 + i * 4;
        push('BEAST_1B', 'Beast Academy 1B: Strategies, Inequalities & Parity', `[BA 1B Ch.6 Parity] Without adding, is ${o1} + ${o2} Even or Odd? Why?`, `Even (Odd + Odd is always Even)`);
      }
      for (let i = 1; i <= 20; i++) {
        const base = 30 + i;
        push('BEAST_1B', 'Beast Academy 1B: Strategies, Inequalities & Parity', `[BA 1B Ch.5 Smart Compare] Compare without adding (<, >, =): ${base} + 18 ___ ${base} + 23`, `< (18 < 23)`);
      }
      for (let i = 1; i <= 20; i++) {
        const a = 25 + i;
        push('BEAST_1B', 'Beast Academy 1B: Strategies, Inequalities & Parity', `[BA 1B Ch.4 Making-10 Strategy] Solve ${a} + 9 + 19 mentally using +10 − 1.`, `${a + 28}`);
      }

      // 4. BEAST_1C: Beast Academy 1C (60 Qs: Q461 - Q520)
      for (let i = 1; i <= 20; i++) {
        const h = (i % 5) + 2, tens = (i % 6) + 12;
        push('BEAST_1C', 'Beast Academy 1C: Big Numbers, Algorithms & Perimeter', `[BA 1C Ch.7 Flexible Regrouping] What number equals ${h} hundreds and ${tens} tens?`, `${h * 100 + tens * 10}`);
      }
      for (let i = 1; i <= 20; i++) {
        const top = 300 + i * 10, sub = 115 + (i % 8) * 6;
        push('BEAST_1C', 'Beast Academy 1C: Big Numbers, Algorithms & Perimeter', `[BA 1C Ch.8 Subtraction Algorithm] Subtract across zeros: ${top} − ${sub}`, `${top - sub}`);
      }
      for (let i = 1; i <= 20; i++) {
        const w = (i % 6) + 3, l = w + 4;
        push('BEAST_1C', 'Beast Academy 1C: Big Numbers, Algorithms & Perimeter', `[BA 1C Ch.9 Perimeter] Find the perimeter of a rectangle with length ${l} cm and width ${w} cm.`, `${2 * (l + w)} cm`);
      }

      // 5. BEAST_1D: Beast Academy 1D (60 Qs: Q521 - Q580)
      for (let i = 1; i <= 20; i++) {
        const end = 14 + i, add = (i % 5) + 4, sub = (i % 4) + 2;
        push('BEAST_1D', 'Beast Academy 1D: Problem Solving, Magic Squares & Money', `[BA 1D Ch.10 Working Backwards] Think of ?, add ${add}, subtract ${sub}, and get ${end}. What was ?`, `${end + sub - add}`);
      }
      for (let i = 1; i <= 20; i++) {
        const s1 = 9 + (i % 5), s2 = 8 + (i % 4), both = 3;
        push('BEAST_1D', 'Beast Academy 1D: Problem Solving, Magic Squares & Money', `[BA 1D Ch.10 Venn Diagram] ${s1} kids play chess, ${s2} play soccer, and ${both} play BOTH. Total kids?`, `${s1 + s2 - both} kids`);
      }
      for (let i = 1; i <= 20; i++) {
        const cost = 35 + (i % 10) * 5;
        push('BEAST_1D', 'Beast Academy 1D: Problem Solving, Magic Squares & Money', `[BA 1D Ch.11 & 12 Coins/Fractions] A toy costs ${cost}¢. You pay with 4 quarters ($1.00). Change? What fraction of $1 is 1 quarter?`, `${100 - cost}¢ change; 1/4`);
      }

      // 6. ENG_SER: English Word Patterns, Analogies & Story Series (60 Qs: Q581 - Q640)
      const engSeriesBank = [
        ['Analogy Series: Finger is to Hand as Toe is to [ ? ]', 'Foot'],
        ['Analogy Series: Bird is to Fly as Fish is to [ ? ]', 'Swim'],
        ['Analogy Series: Author is to Book as Painter is to [ ? ]', 'Picture / Painting'],
        ['Word Intensity Series: Order quietest to loudest: roar, whisper, shout, speak', 'whisper, speak, shout, roar'],
        ['Story Sequence: Put in order: (A) Sprout grows (B) Plant seed (C) Flower blooms', 'B, A, C'],
        ['Analogy Series: Hot is to Cold as Ancient is to [ ? ]', 'Modern / New']
      ];
      for (let i = 0; i < 60; i++) {
        const item = engSeriesBank[i % engSeriesBank.length];
        push('ENG_SER', 'English: Word Patterns, Analogies & Series', `${item[0]} (Drill #${i + 1})`, item[1]);
      }

      // 7. SCI_ALL: Elementary Science Bank (120 Qs: Q641 - Q760)
      const sciBank = [
        ['Space: Which planet is closest to the Sun?', 'Mercury'],
        ['Space: Which is the largest planet in our solar system?', 'Jupiter'],
        ['Space: Why is Venus hotter than Mercury?', 'Its thick clouds trap heat (greenhouse effect).'],
        ['Matter: At what temperature (°F) does liquid water freeze into ice?', '32°F (0°C)'],
        ['Matter: What is it called when liquid water turns into gas vapor?', 'Evaporation'],
        ['Forces: What happens when two North poles of magnets face each other?', 'They repel (push apart).'],
        ['Forces: What invisible force pulls dropped objects down toward Earth?', 'Gravity'],
        ['Life Science: What 3 things do plants need for photosynthesis?', 'Sunlight, water, and carbon dioxide'],
        ['Earth Science: What is melted rock called once it erupts onto Earth’s surface?', 'Lava'],
        ['Human Body: Which organ pumps blood through your body?', 'The heart']
      ];
      for (let i = 0; i < 120; i++) {
        const item = sciBank[i % sciBank.length];
        push('SCI_ALL', 'Science: Space, Matter, Earth & Life Science', `Science Check #${i + 1}: ${item[0]}`, item[1]);
      }

      // 8. EXTRA ADVANCED CHALLENGE PACK (200 Qs: Q761 - Q960)
      for (let i = 1; i <= 50; i++) {
        const a = 120 + i * 7, b = 85 + i * 5;
        push('MATH_NO', 'Math: Number & Operations (3-Digit Challenge)', `3-Digit Addition & Subtraction Challenge #${i}: Solve ${a} + ${b} and ${a} − ${b}.`, `Sum: ${a + b} | Diff: ${a - b}`);
      }
      for (let i = 1; i <= 50; i++) {
        const rows = (i % 6) + 3, cols = (i % 7) + 4, bonus = (i % 9) + 2;
        push('MATH_OA', 'Math: Operations & Algebraic Thinking (Multi-Step)', `Multi-Step Array Problem #${i}: Saanvi builds ${rows} rows of ${cols} blocks and adds ${bonus} extra blocks. Total blocks?`, `${rows * cols + bonus} blocks (${rows}×${cols} + ${bonus})`);
      }
      for (let i = 1; i <= 50; i++) {
        const r = (i % 10) + 3, d = r * 2;
        push('MATH_CIR', 'Math: Circles & Curves (Applied)', `Circle & Semicircle Challenge #${i}: A round garden has a diameter of ${d} feet. What is its radius? If you walk halfway around the edge, what shape is that path?`, `Radius: ${r} feet; Semicircle`);
      }
      const advEng = [
        ['Cause & Effect: "Because Mia forgot to water her fern all week, its green leaves turned brown and crispy." What is the cause?', 'Mia forgot to water her fern all week.'],
        ['Author\'s Purpose: An article explains how sea otters wrap themselves in kelp so waves don\'t carry them away. Is the author writing to Persuade, Inform, or Entertain?', 'Inform (shares real science facts)'],
        ['Context Clues: "The nocturnal owl sleeps all day in a hollow tree and hunts mice under the moonlight." What does nocturnal mean?', 'Active at night'],
        ['Prefix & Suffix Surgery: Break "unhappily" into prefix, root, and suffix, and state its meaning.', 'un + happy + ly (in a way that is not happy)'],
        ['Grammar & Punctuation: Fix all 3 errors: "on friday saanvi leo and maya visited chicago illinois."', 'On Friday, Saanvi, Leo, and Maya visited Chicago, Illinois.']
      ];
      for (let i = 0; i < 50; i++) {
        const e = advEng[i % advEng.length];
        push('ENG_VOC', 'English: Advanced Vocabulary & Comprehension Drills', `Reading & Language Challenge #${i + 1}: ${e[0]}`, e[1]);
      }


      // 9. BEAST ACADEMY 1B WORKBOOK PUZZLES (30 Qs: Q961 - Q990)
      for (let i = 1; i <= 10; i++) {
        push('BEAST_1B', 'Beast Academy 1B: Circle Diagrams, Pyramids & X-Outs', `[BA 1B Circle Diagram #${i}] Sort "one, two, four, nine" into Circle A (3 letters) and Circle B (has letter E). Which word goes in the overlap, and which goes outside both?`, `Overlap: one | Outside: four (two = A only, nine = B only)`);
      }
      for (let i = 1; i <= 10; i++) {
        const a = 8 + (i % 3), b = 2 + (i % 2), c = 9;
        push('BEAST_1B', 'Beast Academy 1B: Circle Diagrams, Pyramids & X-Outs', `[BA 1B Difference Pyramid #${i}] Bottom bricks are ${a}, ${b}, and ${c}. Each brick above is the difference of the two below it. What are the two middle bricks and the top brick?`, `Middle: ${Math.abs(a - b)} and ${Math.abs(c - b)} | Top: ${Math.abs(Math.abs(a - b) - Math.abs(c - b))}`);
      }
      for (let i = 1; i <= 10; i++) {
        const target = 6 + (i % 5);
        push('BEAST_1B', 'Beast Academy 1B: Circle Diagrams, Pyramids & X-Outs', `[BA 1B X-Out Strategy #${i}] In a row containing [${target}, 3, ${target - 3}], how can you cross out numbers to reach Target ${target}?`, `Either keep ${target} alone (cross out 3 and ${target - 3}) OR cross out ${target} and keep 3 + ${target - 3}`);
      }

    })();

