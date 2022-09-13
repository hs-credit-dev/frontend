import TopNavBar from "../../components/NavBars/TopNavBar";

const About = () => {
  return (
    <>
      <TopNavBar />
      <div className="flex flex-col h-3/5 items-center place-content-center my-auto px-4 md:px-16 xl:px-32 2xl:px-64">
        <h3 className="pb-4">About hs.credit</h3>
        <p className="overflow-auto">
          At hs.credit, we are the gold standard of academic testing. Each month
          11th and 12th grade students can mint one credit-bearing NFT, approved
          by a committee of 3 credit experts. Socio-economically diverse blocks
          of these NFTs generate academic capital, a cryptocurrency award for
          participating students. Educators earn up to $180/hr as credit experts
          on the platform. The result is quality academic data and a steady
          stream of high quality, hyper-local youth media.
        </p>
      </div>
    </>
  );
};

export default About;
