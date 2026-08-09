---
name: Shariq Malik - Systems Fieldbook
description: A precise, human technical fieldbook built on Quartz.
colors:
  paper: "#f6f7f2"
  paper-raised: "#ffffff"
  ink: "#1d2421"
  ink-muted: "#5b6862"
  rule: "#d8ded8"
  signal-teal: "#12675f"
  signal-coral: "#c75b35"
  night: "#121714"
  night-ink: "#ecf1ed"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Source Sans Pro, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.76rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
  lede:
    fontFamily: "Source Sans Pro, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 2.3vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.55
  section:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.45rem)"
    fontWeight: 650
    lineHeight: 1.1
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 3vw, 1.9rem)"
    fontWeight: 650
    lineHeight: 1.15
  body-small:
    fontFamily: "Source Sans Pro, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.45
  display-mobile:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.65rem, 14vw, 4rem)"
    fontWeight: 650
    lineHeight: 0.94
    letterSpacing: "-0.035em"
rounded:
  focus: "4px"
  control: "6px"
  thread: "10px"
  surface: "14px"
spacing:
  xs: "0.5rem"
  sm: "0.875rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "6rem"
components:
  action-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1rem"
  project-surface:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "1.5rem"
---

# Design System: Systems Fieldbook

## Overview

**Creative North Star: "The Systems Fieldbook"**

The site feels like a carefully maintained working notebook: calm enough for long-form reading, structured enough to scan, and specific enough to feel authored. It inherits Quartz's information architecture and jzhao.xyz's open-garden invitation, then sharpens the first viewport around Shariq's own work.

**Key Characteristics:** restrained paper surfaces, crisp ink typography, teal links, coral moments of emphasis, exposed relationships, editorial rows instead of card grids.

## Colors

Light mode evokes a fieldbook read in daylight; dark mode is a quiet workstation surface. Teal is the navigational signal and coral is reserved for small status moments.

## Typography

Schibsted Grotesk carries direct, compact display text. Source Sans Pro keeps technical prose highly readable. IBM Plex Mono is reserved for dates, tags, and system labels rather than used as a technical costume.

## Layout

Quartz's three-column desktop frame stays intact for graph and explorer context. The article column uses a 68ch reading measure. The home route expands its internal compositions with deliberate full-width moments, collapsing to one column below 800px.

## Elevation & Depth

The system is flat by default. Tonal changes and fine rules create structure; shadows appear only on one featured project surface and interactive popovers.

## Shapes

Controls use 6px corners. The single featured project surface uses 14px corners. Ordinary content is not boxed.

## Components

Project entries are editorial rows with a date/role rail, title, evidence-led summary, and text link. The featured entry earns a larger surface. Links underline on hover, and every interactive element has a visible offset focus ring.

## Do's and Don'ts

### Do:

- **Do** keep claims concrete and linked to public artifacts where possible.
- **Do** preserve generous reading rhythm and obvious keyboard focus.
- **Do** let the graph, backlinks, and project connections communicate technical breadth.

### Don't:

- **Don't** turn the homepage into a metric strip or equal-sized card grid.
- **Don't** use gradients, decorative glass, or generic technology icon tiles.
- **Don't** publish private contact details or imply public source exists for employer systems.
