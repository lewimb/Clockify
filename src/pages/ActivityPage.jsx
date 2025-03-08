import Searchbar from "../components/Searchbar";
import ActivityList from "../components/ActivityList";
import Filter from "../components/Filter";

function ActivityPage() {
  return (
    <div className="w-[60vw] flex flex-col items-center ">
      <h1 className="text-[40px] font-bold">Activity</h1>
      <div className="w-full flex flex-col justify-between py-5">
        <div className="flex gap-6">
          <Searchbar />
          <Filter />
        </div>
        <ActivityList />
      </div>
    </div>
  );
}

export default ActivityPage;
