import React from "react";

type BoxProps = {
  customClass: string;
  styles?: React.CSSProperties | undefined;
  amountValue?: number | string;
  title: string;
  sType: string;
  boxClick(id: string): void;
  onHoverIn(id: string): void;
  onHoverOut(id: string): void;
};
export const KpiBox = ({
  customClass,
  styles,
  amountValue,
  title,
  sType,
  onHoverIn,
  onHoverOut,
  boxClick,
}: BoxProps) => {
  return (
    <div
      className={`skewed-box ${customClass}`}
      style={styles}
      onMouseOver={() => onHoverIn(sType)}
      onMouseOut={() => onHoverOut(sType)}
      onClick={() => boxClick(sType)}
    >
      <div className="parent">
        <div className="parent-child1">{amountValue}</div>
        <div className="parent-child2">{title}</div>
      </div>
    </div>
  );
};
