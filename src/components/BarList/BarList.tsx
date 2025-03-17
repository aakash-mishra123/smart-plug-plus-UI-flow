// Tremor BarList [v0.1.1]
"use client";
import React from "react";

import { cx, focusRing } from "@/lib/utils"

type Bar<T> = T & {
  key?: string
  href?: string
  value?: number
  usage?: number
  name: string
  formattedTimeStamp?: string,
  peakValue ?: boolean,
}

interface BarListProps<T = unknown>
  extends React.HTMLAttributes<HTMLDivElement> {
  data: Bar<T>[]
  valueFormatter?: (value: number) => string,
  showAnimation?: boolean,
  rowHeight?: string,
  onValueChange?: (payload: Bar<T>) => void
  sortOrder?: "ascending" | "descending" | "none",
  total?: number,
  peakBar?: Bar<T>
}

function BarListInner<T>(
  {
    data = [],
    valueFormatter = (value) => value.toString(),
    showAnimation = false,
    total = 100,
    onValueChange,
    sortOrder = "descending",
    className,
    rowHeight,
    ...props
  }: BarListProps<T>,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const Component = onValueChange ? "button" : "div"
  const sortedData = React.useMemo(() => {
    if (sortOrder === "none") {
      return data
    }
    return [...data].sort((a, b) => {
      return sortOrder === "ascending" ? (a?.value ?? 0) - (b?.value ?? 0) : (b?.value ?? 0) - (a?.value ?? 0)
    })
  }, [data, sortOrder])

  const widths = React.useMemo(() => {
   return sortedData.map((item) =>
        total === 0 ? 0 : ((item?.value ?? 0) / total) * 100
    );
  }, [sortedData, total])

  

  return (
    <div
      ref={forwardedRef}
      className={cx("flex justify-between space-x-6 px-4 py-2 bg-white", className)}
      aria-sort={sortOrder}
      tremor-id="tremor-raw"
      {...props}
    >
      <div className="relative w-full space-y-1.5">
        {sortedData.map((item, index) => (
          <Component
            key={item.key ?? item.name ?? index}
            onClick={() => {
              onValueChange?.(item)
            }}
            className={cx(
              // base
              "group w-full rounded",
              // focus
              focusRing,
              onValueChange
                ? [
                  "!-m-0 cursor-pointer",
                  // hover
                  "hover:bg-gray-50 hover:dark:bg-gray-900",
                ]
                : "",
            )}
          >
            <div
              className={cx(
                // base
                "flex items-center rounded transition-all h-8",
                rowHeight,
                // background color
                "bg-pink-200 dark:bg-pink-200 text-black",
                onValueChange
                  ? "group-hover:bg-blue-300 group-hover:dark:bg-blue-800"
                  : "",
                // margin and duration
                {
                  "mb-0": index === sortedData.length - 1,
                  "duration-800": showAnimation,
                },
              )}
              style={{ width: `${widths[index]}%` }}
            >
              <div className={cx("absolute left-2 flex max-w-full pr-2")}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={cx(
                      // base
                      "truncate whitespace-nowrap rounded text-sm",
                      // text color
                      "text-gray-900 dark:text-gray-800",
                      // hover
                      "hover:underline hover:underline-offset-2",
                      // focus
                      focusRing,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {item.name}
                  </a>
                ) : (
                  <p
                    className={cx(
                      // base
                      "truncate whitespace-nowrap text-md font-medium",
                      // text color
                      "text-gray-900 dark:text-black",
                    )}
                  >
                    {item.name}
                  </p>
                )}
              </div>
            </div>
          </Component>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {sortedData.map((item, index) => (
          <div
            key={index}
            className={cx(
              "flex items-center justify-between text-gray-800 font-bold",
              rowHeight,
              index === sortedData.length - 1 ? "mb-0" : "mb-1.5",
            )}
          >
            <p
              className={cx(
                // base
                "truncate whitespace-nowrap text-lg leading-none",
                // text color
                "text-gray-900 dark:text-gray-800 mb-1",
              )}
            >
              {`${valueFormatter((item?.usage ?? 0))} kWh`}
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}

BarListInner.displayName = "BarList"

const BarList = React.forwardRef(BarListInner) as <T>(
  p: BarListProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => ReturnType<typeof BarListInner>

export { BarList, type BarListProps }
