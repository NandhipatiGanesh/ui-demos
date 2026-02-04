import HeaderOne from "@/components/headerOne";
import FeaturesPersks from "@/components/features-persks";
export default function FeaturePersks() {
  return (
    <>
      <HeaderOne />
      <div className="page-transition pointer-events-none fixed inset-0 z-50 flex items-center justify-center opacity-0">
        <svg
          className="transition h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            <linearGradient
              id="grad"
              x1="0"
              y1="0"
              x2="99"
              y2="99"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.2" stopColor="rgb(255, 135, 9)" />
              <stop offset="0.7" stopColor="rgb(247, 189, 248)" />
            </linearGradient>
          </defs>
          <path
            className="page-transition-path"
            stroke="url(#grad)"
            fill="url(#grad)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </svg>
      </div>
      <FeaturesPersks />
    </>
  );
}
