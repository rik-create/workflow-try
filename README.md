# workflow-try
workflow-try

## React Application with TypeScript

This project includes a React application written in TypeScript. The application provides an interactive, visual representation of a cemetery layout for administrators and staff. It displays individual lots, their status, and related details.

### Features

- Interactive cemetery map (`Map_View` component)
- Individual lot representation with color-coded status (`Lot_Polygon` component)
- Status legend explaining color-coding (`Status_Legend` component)
- Map navigation controls (`Zoom_In_Button`, `Zoom_Out_Button`, `Pan_Control` components)
- Search and filter functionality (`Search_Input`, `Search_Button`, `Filter_Dropdown` components)
- Detailed lot information panel (`Lot_Info_Panel` component)
- Various labels and links for lot details (`Lot_ID_Label`, `Lot_Size_Label`, `Lot_Category_Label`, `Lot_Status_Indicator`, `Occupant_Name_Label`, `Owner_Link`, `Sales_Link`)
- Buttons for editing lot details and initiating sales (`Edit_Lot_Button`, `Initiate_Sale_Button`)

## Tailwind CSS Configuration

The project uses Tailwind CSS for styling. The configuration is set up to ensure a clean and responsive layout for the cemetery map interface.

### Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

### Running the Application

To start the application, use the following command:

```bash
npm start
```

This will launch the React application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building the Application

To build the application for production, use the following command:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.
