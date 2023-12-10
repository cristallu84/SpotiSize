import Navbar from "./_components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotisize",
  description: "Playground to test out using the Spotify API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-[#11005e] to-slate-950 min-h-screen h-fit min-w-fit w-full"} >
        <Navbar></Navbar>
        {children}
        {/* <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(95.594, 62, 243, 1)" offset="0%"></stop><stop stop-color="rgba(21.152, 8.907, 57.24, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,0L26.7,8.2C53.3,16,107,33,160,73.5C213.3,114,267,180,320,212.3C373.3,245,427,245,480,204.2C533.3,163,587,82,640,49C693.3,16,747,33,800,106.2C853.3,180,907,310,960,367.5C1013.3,425,1067,408,1120,375.7C1173.3,343,1227,294,1280,261.3C1333.3,229,1387,212,1440,196C1493.3,180,1547,163,1600,155.2C1653.3,147,1707,147,1760,179.7C1813.3,212,1867,278,1920,269.5C1973.3,261,2027,180,2080,179.7C2133.3,180,2187,261,2240,277.7C2293.3,294,2347,245,2400,196C2453.3,147,2507,98,2560,81.7C2613.3,65,2667,82,2720,122.5C2773.3,163,2827,229,2880,220.5C2933.3,212,2987,131,3040,98C3093.3,65,3147,82,3200,98C3253.3,114,3307,131,3360,138.8C3413.3,147,3467,147,3520,171.5C3573.3,196,3627,245,3680,285.8C3733.3,327,3787,359,3813,375.7L3840,392L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(0.32, 0.096, 0.025, 1)" offset="0%"></stop><stop stop-color="rgba(61.472, 36.165, 202.954, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 50px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,245L26.7,245C53.3,245,107,245,160,204.2C213.3,163,267,82,320,89.8C373.3,98,427,196,480,196C533.3,196,587,98,640,114.3C693.3,131,747,261,800,277.7C853.3,294,907,196,960,147C1013.3,98,1067,98,1120,114.3C1173.3,131,1227,163,1280,187.8C1333.3,212,1387,229,1440,204.2C1493.3,180,1547,114,1600,147C1653.3,180,1707,310,1760,367.5C1813.3,425,1867,408,1920,343C1973.3,278,2027,163,2080,122.5C2133.3,82,2187,114,2240,114.3C2293.3,114,2347,82,2400,106.2C2453.3,131,2507,212,2560,204.2C2613.3,196,2667,98,2720,49C2773.3,0,2827,0,2880,32.7C2933.3,65,2987,131,3040,147C3093.3,163,3147,131,3200,98C3253.3,65,3307,33,3360,73.5C3413.3,114,3467,229,3520,277.7C3573.3,327,3627,310,3680,318.5C3733.3,327,3787,359,3813,375.7L3840,392L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(85.833, 42.656, 239.383, 1)" offset="0%"></stop><stop stop-color="rgba(65.083, 59.135, 109.606, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 100px); opacity:0.8" fill="url(#sw-gradient-2)" d="M0,343L26.7,326.7C53.3,310,107,278,160,253.2C213.3,229,267,212,320,171.5C373.3,131,427,65,480,89.8C533.3,114,587,229,640,277.7C693.3,327,747,310,800,269.5C853.3,229,907,163,960,130.7C1013.3,98,1067,98,1120,114.3C1173.3,131,1227,163,1280,171.5C1333.3,180,1387,163,1440,155.2C1493.3,147,1547,147,1600,171.5C1653.3,196,1707,245,1760,245C1813.3,245,1867,196,1920,179.7C1973.3,163,2027,180,2080,212.3C2133.3,245,2187,294,2240,318.5C2293.3,343,2347,343,2400,359.3C2453.3,376,2507,408,2560,375.7C2613.3,343,2667,245,2720,245C2773.3,245,2827,343,2880,375.7C2933.3,408,2987,376,3040,318.5C3093.3,261,3147,180,3200,187.8C3253.3,196,3307,294,3360,277.7C3413.3,261,3467,131,3520,138.8C3573.3,147,3627,294,3680,343C3733.3,392,3787,343,3813,318.5L3840,294L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"></path><defs><linearGradient id="sw-gradient-3" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(70.901, 61.338, 58.267, 1)" offset="0%"></stop><stop stop-color="rgba(56.493, 5.73, 182.463, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 150px); opacity:0.7" fill="url(#sw-gradient-3)" d="M0,98L26.7,114.3C53.3,131,107,163,160,196C213.3,229,267,261,320,269.5C373.3,278,427,261,480,245C533.3,229,587,212,640,204.2C693.3,196,747,196,800,179.7C853.3,163,907,131,960,106.2C1013.3,82,1067,65,1120,89.8C1173.3,114,1227,180,1280,220.5C1333.3,261,1387,278,1440,253.2C1493.3,229,1547,163,1600,138.8C1653.3,114,1707,131,1760,114.3C1813.3,98,1867,49,1920,98C1973.3,147,2027,294,2080,343C2133.3,392,2187,343,2240,310.3C2293.3,278,2347,261,2400,220.5C2453.3,180,2507,114,2560,122.5C2613.3,131,2667,212,2720,261.3C2773.3,310,2827,327,2880,310.3C2933.3,294,2987,245,3040,261.3C3093.3,278,3147,359,3200,367.5C3253.3,376,3307,310,3360,310.3C3413.3,310,3467,376,3520,408.3C3573.3,441,3627,441,3680,408.3C3733.3,376,3787,310,3813,277.7L3840,245L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"></path></svg> */}
      </body>
    </html> 
  );
}
