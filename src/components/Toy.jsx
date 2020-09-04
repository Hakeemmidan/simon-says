import * as React from "react";

const SvgComponent = (props) => {
  // from props, play the game colors so far in animated way on mount

  // on each click of color, check if it matches
    // keep counter idx

  return (
    <svg width={201.333} height={201.332} {...props}>
      <path
        fill="#2B2B2B"
        d="M201.333 100.666c0 55.597-45.072 100.666-100.665 100.666C45.071 201.332 0 156.263 0 100.666S45.071 0 100.668 0c55.592 0 100.665 45.069 100.665 100.666z"
      />
      <path d="M198.333 100.666c0 53.94-43.729 97.666-97.665 97.666C46.728 198.332 3 154.606 3 100.666S46.728 3 100.668 3c53.936 0 97.665 43.726 97.665 97.666z" />
      <defs>
        <circle id="prefix__a" cx={100.666} cy={100.666} r={91.333} />
      </defs>
      <clipPath id="prefix__b">
        <use xlinkHref="#prefix__a" overflow="visible" />
      </clipPath>
      <path
        clipPath="url(#prefix__b)"
        fill="#FFDE17"
        d="M-2 100.666h102.665v97.666H-2z"
      />
      <path
        clipPath="url(#prefix__b)"
        fill="#21409A"
        d="M100.667 100.666h102.665v97.666H100.667z"
      />
      <path
        clipPath="url(#prefix__b)"
        fill="#00A14B"
        d="M100.667 3h102.665v97.666H100.667z"
      />
      <path
        clipPath="url(#prefix__b)"
        fill="#ED1C24"
        d="M-2 3h102.665v97.666H-2z"
      />
      <g>
        <defs>
          <circle id="prefix__c" cx={100.666} cy={100.666} r={86.667} />
        </defs>
        <clipPath id="prefix__d">
          <use xlinkHref="#prefix__c" overflow="visible" />
        </clipPath>
        <path
          clipPath="url(#prefix__d)"
          fill="#DFC323"
          d="M3.246 100.666h97.419v92.676H3.246z"
        />
        <path
          clipPath="url(#prefix__d)"
          fill="#283676"
          d="M100.667 100.666h97.419v92.676h-97.419z"
        />
        <path
          clipPath="url(#prefix__d)"
          fill="#00783E"
          d="M100.667 7.99h97.419v92.676h-97.419z"
        />
        <path
          clipPath="url(#prefix__d)"
          fill="#C92127"
          d="M3.246 7.99h97.419v92.676H3.246z"
        />
      </g>
      <path d="M97.167 6.041h7v189h-7z" />
      <path d="M6.167 97.166h189v7h-189z" />
      <circle cx={100.666} cy={100.666} r={33.333} />
      <circle fill="#4C4C4D" cx={100.666} cy={100.666} r={28.07} />
    </svg>
  );
}

export default SvgComponent;

