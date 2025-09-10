import React from 'react';

const StatisticsSection = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-4 max-md:w-full max-md:grid-cols-2">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-md:h-full">
        <div className="flex flex-col items-center justify-center gap-1 p-3 md:p-4">
          <div className="flex items-center font-bold">
            <span className="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-mono text-3xl text-transparent md:text-4xl">19</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="iconify iconify--mingcute size-6 text-primary md:size-8" width="1em" height="1em" viewBox="0 0 24 24">
              <g fill="none" fillRule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                <path fill="currentColor" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4z"></path>
              </g>
            </svg>
          </div>
          <button data-state="closed" className="cursor-help">
            <div className="relative flex w-fit items-center justify-center gap-1 rounded-xl bg-secondary/40 px-3 py-1 md:px-3 md:py-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="iconify iconify--ic size-6 text-primary" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"></path>
              </svg>
              <span className="text-sm font-semibold text-gray-400">Projects</span>
              <div className="absolute right-0 top-0 flex size-6 -translate-y-2 translate-x-2 items-center justify-center rounded-full bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="iconify iconify--fluent size-4 text-background" width="1em" height="1em" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M1 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-1.164 1.818a1.5 1.5 0 0 0-.275-.379l-4-4A1.5 1.5 0 0 0 7 8.5V12H3a2 2 0 0 1-2-2zm7.854 3.146A.5.5 0 0 0 8 8.5v6a.5.5 0 0 0 .9.3l1.35-1.8h2.25a.5.5 0 0 0 .354-.854z"></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-md:h-full">
        <div className="flex flex-col items-center justify-center gap-1 p-3 md:p-4">
          <div className="flex items-center font-bold">
            <span className="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-mono text-3xl text-transparent md:text-4xl">9</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="iconify iconify--mingcute size-6 text-primary md:size-8" width="1em" height="1em" viewBox="0 0 24 24">
              <g fill="none" fillRule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                <path fill="currentColor" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4z"></path>
              </g>
            </svg>
          </div>
          <button data-state="delayed-open" className="cursor-default" aria-describedby="radix-:r1:">
            <div className="relative flex w-fit items-center justify-center gap-1 rounded-xl bg-secondary/40 px-3 py-1 md:px-3 md:py-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="iconify iconify--fluent size-6 text-primary" width="1em" height="1em" viewBox="0 0 12 12">
                <path fill="currentColor" d="M4 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M2.25 7C1.56 7 1 7.56 1 8.25c0 0 0 2.25 3 2.25c2.378 0 2.871-1.414 2.973-2C7 8.347 7 8.25 7 8.25C7 7.56 6.44 7 5.75 7zm5.746 1.6q-.003.06-.012.142a2.9 2.9 0 0 1-.42 1.16c.265.061.574.098.935.098c2.5 0 2.5-1.75 2.5-1.75c0-.69-.56-1.25-1.25-1.25H7.62c.24.358.379.787.379 1.25v.25z"></path>
              </svg>
              <span className="text-sm font-semibold text-gray-400">Clients</span>
            </div>
          </button>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-md:h-full max-md:col-span-2">
        <div className="flex flex-col items-center justify-center gap-1 p-3 md:p-4">
          <div className="flex items-center font-bold">
            <span className="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-mono text-4xl text-transparent md:text-5xl">4</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="iconify iconify--mingcute size-6 text-primary md:size-8" width="1em" height="1em" viewBox="0 0 24 24">
              <g fill="none" fillRule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                <path fill="currentColor" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4z"></path>
              </g>
            </svg>
          </div>
          <button data-state="delayed-open" className="cursor-default" aria-describedby="radix-:r2:">
            <div className="relative flex w-fit items-center justify-center gap-1 rounded-xl bg-secondary/40 px-3 py-1 md:px-3 md:py-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="iconify iconify--solar size-6 text-primary" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"></path>
                <path fill="currentColor" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" opacity=".5"></path>
              </svg>
              <span className="text-sm font-semibold text-gray-400">Yrs Expertise</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
