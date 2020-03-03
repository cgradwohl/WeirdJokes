export default () => {
  const jokes = [
    {
      setup: "How do you make holy water?",
      punchline: "You boil the hell out of it."
    },
    {
      setup: "I bought some shoes from a drug dealer.",
      punchline: "I don't know what he laced them with, but I was tripping all day!"
    },
    {
      setup: "Did you know the first French fries weren't actually cooked in France?",
      punchline: "They were cooked in Greece."
    },
    {
      setup: "I'm reading a book about anti-gravity.",
      punchline: ""
    },
    {
      setup: "What do you call someone with no body and no nose? ",
      punchline: "Nobody knows."
    },
    {
      setup: "I ordered a chicken and an egg from Amazon.",
      punchline: "I’ll let you know."
    },
    {
      setup: "What is the least spoken language in the world?",
      punchline: "Sign language"
    }
  ];

  const index = () => Math.floor(Math.random() * 7);

  console.log('INDEX', index());

  return jokes[index()];
}