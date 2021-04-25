import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'
import App from '../App'

function Canvas ({pagedFrames, fileData, exportSettings, settings, onHeaderBack}) {
  return (
    <I18nextProvider i18n={i18n}>
      <App
        isModule
        pagedFrames={pagedFrames}
        fileData={fileData}
        exportSettings={exportSettings}
        settings={settings}
        onHeaderBack={onHeaderBack}
      />
    </I18nextProvider>
  )
}

export default Canvas
