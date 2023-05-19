const CategoryTabs = () => {
  return (
    <div className="flex justify-center items-center my-10 gap-5">
      <button className="py-2 px-6 border-2 rounded-md border-purple-500 text-lg font-semibold">
        Marvel
      </button>
      <button className="py-2 px-6 border-2 rounded-md border-purple-500 text-lg font-semibold">
        DC
      </button>
      <button className="py-2 px-6 border-2 rounded-md border-purple-500 text-lg font-semibold">
        Transformers
      </button>
      <button className="py-2 px-6 border-2 rounded-md border-purple-500 text-lg font-semibold">
        Star Wars
      </button>
      <button className="py-2 px-6 border-2 rounded-md border-purple-500 text-lg font-semibold">
        Invincible
      </button>
      <button className="py-2 px-6 border-2 rounded-md border-purple-500 text-lg font-semibold">
        Avatar
      </button>
    </div>
  );
};

export default CategoryTabs;
