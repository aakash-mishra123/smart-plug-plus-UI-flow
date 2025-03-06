"use client";

import React, { forwardRef, ReactNode } from "react";
import { Collapse, Fade, Box, Grow, Slide, Zoom } from "@mui/material";
import { SxProps } from "@mui/system";

type TransitionType = "grow" | "fade" | "collapse" | "slide" | "zoom";
type PositionType =
    | "top-left"
    | "top-right"
    | "top"
    | "bottom-left"
    | "bottom-right"
    | "bottom"
    | "top-bottom"
    | "bottom-top";
type DirectionType = "up" | "down" | "left" | "right";

type TransitionProps = {
    children?: ReactNode;
    type?: TransitionType;
    position?: PositionType;
    direction?: DirectionType;
    in?: boolean;
    timeout?:
    | number
    | { appear?: number; enter?: number; exit?: number };
    buffer?: number;
};

const Transitions = forwardRef<HTMLDivElement, TransitionProps>(
    (
        {
            children,
            position = "top-left",
            type = "grow",
            direction = "up",
            in: show = true,
            timeout = { appear: 0, enter: 400, exit: 200 },
            buffer = 50,
            ...others
        },
        ref
    ) => {
        // Use SxProps for styling the inner Box
        let positionSX: SxProps = { transformOrigin: "0 0 0" };

        if (type === "slide") {
            positionSX = {
                ...(direction === "left"
                    ? { transform: `translateX(${buffer}px)` }
                    : {}),
                ...(direction === "right"
                    ? { transform: `translateX(-${buffer}px)` }
                    : {}),
                ...(direction === "up"
                    ? { transform: `translateY(${buffer}px)` }
                    : {}),
                ...(direction === "down"
                    ? { transform: `translateY(-${buffer}px)` }
                    : {}),
            };
        }

        switch (position) {
            case "top-right":
                positionSX.transformOrigin = "top right";
                break;
            case "top":
                positionSX.transformOrigin = "top";
                break;
            case "bottom-left":
                positionSX.transformOrigin = "bottom left";
                break;
            case "bottom-right":
                positionSX.transformOrigin = "bottom right";
                break;
            case "bottom":
                positionSX.transformOrigin = "bottom";
                break;
            case "top-left":
                positionSX.transformOrigin = "0 0 0";
                break;
            case "top-bottom":
                positionSX.transformOrigin = "top center";
                break;
            case "bottom-top":
                positionSX.transformOrigin = "bottom center";
                break;
            default:
                positionSX.transformOrigin = "0 0 0";
                break;
        }

        return (
            <Box ref={ref}>
                {type === "grow" && (
                    <Grow in={show} timeout={timeout} {...others}>
                        <Box sx={positionSX}>{children}</Box>
                    </Grow>
                )}
                {type === "collapse" && (
                    <Collapse in={show} timeout={timeout} sx={positionSX}>
                        {children}
                    </Collapse>
                )}
                {type === "fade" && (
                    <Fade in={show} timeout={timeout} {...others}>
                        <Box sx={positionSX}>{children}</Box>
                    </Fade>
                )}
                {type === "slide" && (
                    <Slide in={show} timeout={timeout} direction={direction} {...others}>
                        <Box sx={positionSX}>{children}</Box>
                    </Slide>
                )}
                {type === "zoom" && (
                    <Zoom in={show} timeout={timeout} {...others}>
                        <Box sx={positionSX}>{children}</Box>
                    </Zoom>
                )}
            </Box>
        );
    }
);

// Set displayName for ESLint
Transitions.displayName = "Transitions";

export default Transitions;
