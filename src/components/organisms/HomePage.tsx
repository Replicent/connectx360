import CreateProposal from "./CreateProposals";
import HomeCard from "../atoms/HomeCard";

const Home = () => {
  return (
    <div className="w-full">
      <HomeCard
        title="Welcome to ConnectX360"
        content={
          <div className="flex flex-col gap-3 md:gap-6">
            <p className="text-gray-600 w-full md:w-[50%]">
              With ConnectX360, you can easily create and manage proposals,
              track progress, and stay informed about your business activities.
            </p>
            <CreateProposal />
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6 mt-3 md:mt-6">
        <HomeCard
          title="Overview"
          content="Quick insights about your performance."
        />
        <HomeCard
          title="Tasks"
          content="View and manage your tasks efficiently."
        />
        <HomeCard title="Activity Log" content="Recent actions and updates." />
      </div>
    </div>
  );
};

export default Home;
