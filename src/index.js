import React from "react";
import ReactPDF from "@react-pdf/renderer";
import MyDocument from "./document";

ReactPDF.render(<MyDocument />, `${__dirname}/../pdf/example.pdf`);
