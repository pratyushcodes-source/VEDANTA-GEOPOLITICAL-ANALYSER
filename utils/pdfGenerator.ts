
// These are loaded from CDN in index.html
declare const jspdf: any;
declare const html2canvas: any;

export const generatePdf = async (
    swotEl: HTMLElement, 
    pestEl: HTMLElement, 
    playersEl: HTMLElement, 
    topic: string
) => {
    try {
        const { jsPDF } = jspdf;
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
        });
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfMargin = 15;
        const contentWidth = pdfWidth - pdfMargin * 2;

        const addContentToPdf = async (element: HTMLElement, title: string) => {
            const canvas = await html2canvas(element, { 
                scale: 2, 
                backgroundColor: '#ffffff',
                useCORS: true,
            });
            const imgData = canvas.toDataURL('image/png');
            const imgHeight = (canvas.height * contentWidth) / canvas.width;
            
            pdf.setFontSize(16);
            pdf.setTextColor(44, 62, 80); // #2c3e50
            pdf.text(title, pdfMargin, 20);

            pdf.addImage(imgData, 'PNG', pdfMargin, 30, contentWidth, imgHeight);
        };
        
        pdf.setFontSize(22);
        pdf.setTextColor(22, 78, 99); // #164e63
        pdf.text(`Geopolitical Analysis: ${topic}`, pdfWidth / 2, 15, { align: 'center' });

        await addContentToPdf(swotEl, 'SWOT Analysis');
        
        pdf.addPage();
        await addContentToPdf(pestEl, 'PEST Analysis');
        
        pdf.addPage();
        await addContentToPdf(playersEl, 'Key Players');
        
        const fileName = `${topic.replace(/\s+/g, '_')}_Analysis.pdf`;
        pdf.save(fileName);

    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("An error occurred while generating the PDF. Please try again.");
    }
};
