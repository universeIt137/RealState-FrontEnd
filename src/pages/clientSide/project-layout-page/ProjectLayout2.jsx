import React from 'react';

const ProjectLayout2 = () => {
    const pdfUrl = '/pdf/Layout.pdf';

    return (
        <div>
            <div className="w-2/3 mx-auto">
                

                {/* PDF Viewer */}
                <div style={{ height: '100vh', width: '100%' }}>
                    <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        title="PDF Viewer"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', display: 'block', maxHeight: '100vh' }}
                    />
                </div>
                {/* Download button */}
                <div className="text-center my-4">
                    <a 
                        href={pdfUrl} 
                        download 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectLayout2;
