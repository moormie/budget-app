import { FC, useCallback, useEffect, useRef } from "react";
import "./styles.css";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  rangeValues: { min: number; max: number };
  onChangeFrom: (min: number) => void;
  onChangeTo: (max: number) => void;
  color?: string;
}

export const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  rangeValues,
  onChangeFrom,
  onChangeTo,
  color,
}) => {
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(rangeValues.min);
      const maxPercent = getPercent(Number(maxValRef.current.value));
      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [rangeValues.min, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(Number(minValRef.current.value));
      const maxPercent = getPercent(rangeValues.max);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [rangeValues.max, getPercent]);

  const onChangeMinVal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), rangeValues.max - 1);
    onChangeFrom(value);
    event.target.value = value.toString();
  };

  const onChangeMaxVal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), rangeValues.min + 1);
    onChangeTo(value);
    event.target.value = value.toString();
  };

  return (
    <>
      <div className="container">
        <input
          type="range"
          min={min}
          max={max}
          value={rangeValues.min}
          ref={minValRef}
          onChange={(event) => {
            onChangeMinVal(event);
          }}
          className="thumb thumb-left"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={rangeValues.max}
          ref={maxValRef}
          onChange={(event) => {
            onChangeMaxVal(event);
          }}
          className="thumb thumb-right"
        />

        <div className="slider">
          <div className="slider-track"></div>
          <div
            ref={range}
            className="slider-range"
            style={{
              backgroundColor: color,
            }}
          ></div>
        </div>
      </div>
      <div className="slider-values">
        <div className="slider-value">{rangeValues.min}</div>
        <div className="slider-value">{rangeValues.max}</div>
      </div>
    </>
  );
};
