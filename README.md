# Delicacy — Phase 1 React Conversion

This project converts the original static Delicacy website into a React + Vite frontend while preserving the original visual design, local images, fonts, colors, and responsive CSS.

## Run

```bash
cd client
npm install
npm run dev
```

## Phase 1 changes

- Converted the static HTML page to React.
- Added React components/data-driven rendering for categories, products, and reviews.
- Replaced the old DOM menu script with React state.
- Replaced the old Swiper CDN setup with the `swiper/react` package.
- Kept the original CSS and image assets.
- No backend/database has been added yet.

## Next phase

Build the Express + MongoDB API and replace the hardcoded product/category data with database data.
