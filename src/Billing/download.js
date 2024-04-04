import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function download({products}){
    
    const exportPDF = () => {
        const unit = 'pt';
        const size = 'A4';
        const orientation = 'portrait';

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(24);    
        const title = 'Items In Cart';
        const headers = [["Sn.No", "Product Name", "Quantity"]];
        const data = products.map((elt, key) => [key+1, elt.productName, elt.quantity+" "+elt.weight]);
        console.log(data)

        let content = {
            startY: 50,
            head: headers,
            body: data,
            headStyles: {
                fillColor : [221, 160, 221],
                textColor: [102,51,153],    
                fontSize: 20,
                // halign: 'center',
            },
            bodyStyles: {
                fillColor: [245, 222, 179],
                textColor: [139, 69, 19],
                fontSize: 18,
                // halign: 'center',

            },
            alternateRowStyles: {
                fillColor: [255, 239, 213],
                textColor: [153, 62, 62],
            }


        }
        
        doc.setTextColor(128, 0, 128);
        doc.setFontSize(28);  
        // doc.text('ஐக்கிய நாடுகள்', 50, 40);
        doc.setFont('helvetica', 'bold')
        doc.text(title, 300, 40, {align: 'center'}, {marginBottom: 20   } );
        doc.autoTable(content); 
        doc.save('Products-List.pdf')
    
    }
    return(
        <div className="download">
            <button onClick={exportPDF}>Download</button>
           
        </div>
        
    )
}