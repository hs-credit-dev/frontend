import Link from "next/link";

export default function Page() {
  return (
    <div className="pt-[1.75rem] pb-[2.125rem] pl-[4.3125rem] pr-14">
      <div className="flex justify-between items-center">
        <h1>Stake</h1>{" "}
        <div>
          <Link
            href="/students/credit-details"
            className="btn text-[0.75rem] px-[1.6875rem] py-3"
          >
            Back
          </Link>
        </div>
      </div>
      <div>
        <section className="font-medium pt-[2.0625rem] pb-[2.1875rem]">
          <p>
            Here you show evidence that you invested your attention to “geek
            out” on a topic. List the discipline from the available options and
            then share a list of sources from which you have notes that will
            inform your podcast or video project.
          </p>
        </section>
        <section className="px-[0.3125rem]">
          <form className="flex flex-col gap-y-[1.9375rem]">
            <div className="flex gap-x-6">
              <div className="flex flex-col gap-y-[0.625rem] w-[37.427386%]">
                <label htmlFor="credit">Credit</label>
                <input
                  type="text"
                  id="credit"
                  name="credit"
                  className="w-full bg-[#E0E0E0]"
                />
              </div>
              <div className="flex flex-col gap-y-[0.625rem] w-[53.360996%]">
                <label htmlFor="email">Teacher's Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col  gap-y-[0.625rem]">
              <label htmlFor="content">Content to Stake</label>
              <textarea
                id="content"
                name="content"
                cols={20}
                rows={2}
                className="bg-[#E0E0E0]"
              ></textarea>
            </div>
            <div className="flex flex-col gap-y-[1.0625rem]">
              <div className="flex flex-col gap-y-[0.625rem]">
                <label htmlFor="stakeContent">Staked Content</label>
                <textarea
                  id="stakeContent"
                  name="stakeContent"
                  cols={20}
                  rows={6}
                ></textarea>
              </div>
              <div className="flex">
                <button type="submit" className="btn py-4 px-[4.625rem]">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
