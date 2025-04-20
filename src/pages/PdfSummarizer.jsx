import React from 'react'
import PdfUploader from '../components/PdfUploader'
import ChatService from '../components/ChatService'
function PdfSummarizer() {
  return (
    <div>
        <div className='text-center py-4'>
            <h1 className='text-3xl font-bold underline'>PDF Summariser</h1>
            <div className='flex justify-between items-center p-4'>
            <PdfUploader/>
            <ChatService/>
            </div>
        </div>
    </div>
  )
}

export default PdfSummarizer