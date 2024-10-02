export default function Bookings() {
  return (
    <div className="py-6 lg:py-20 px-5 lg:px-24 text-grey-200">
      <h1 className="text-2xl font-semibold text-grey mb-6">Bookings</h1>
      <div className="max-w-[486px]">
        <h2 className="text-lg font-medium text-grey mb-2">No bookings made...yet!</h2>
        <p className="mb-6">
          Time to explore our range of workspaces and shortlets. Find the perfect spot and start
          planning your next stay or workspace experience!
        </p>
      </div>
      <button className="bg-blue rounded-lg py-3 px-4 text-white font-medium">
        Start searching
      </button>
    </div>
  );
}
