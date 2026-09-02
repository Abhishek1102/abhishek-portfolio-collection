import React, { useState } from 'react';
import { Download, X, CheckCircle2 } from 'lucide-react';

interface DownloadResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadResumeModal: React.FC<DownloadResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadedFormat, setDownloadedFormat] = useState<string | null>(null);

  if (!isOpen) {
    return null;
  }

  const handleDownload = (format: string) => {
    setDownloadedFormat(format);
    setTimeout(() => {
      setDownloadedFormat(null);
      onClose();
    }, 1200);
  };

  const handleDownloadPng = () => {
    handleDownload('PNG Images (Abhishek_Resume)');
    setTimeout(() => {
      const link1 = document.createElement('a');
      link1.href = 'Abhishek_Resume_Page_1.png?v=102';
      link1.download = 'Abhishek_Resume/Abhishek_Resume_Page_1.png';
      document.body.appendChild(link1);
      link1.click();
      document.body.removeChild(link1);
    }, 200);

    setTimeout(() => {
      const link2 = document.createElement('a');
      link2.href = 'Abhishek_Resume_Page_2.png?v=102';
      link2.download = 'Abhishek_Resume/Abhishek_Resume_Page_2.png';
      document.body.appendChild(link2);
      link2.click();
      document.body.removeChild(link2);
    }, 400);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(4, 7, 13, 0.92)',
        backdropFilter: 'blur(14px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#0f172a',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '20px',
          padding: '28px',
          maxWidth: '500px',
          width: '100%',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#f59e0b',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
            }}
          >
            <Download size={28} />
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
            Download Resume
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#9ca3af' }}>
            Choose your preferred format to download Abhishek's resume:
          </p>
        </div>

        {downloadedFormat !== null ? (
          <div
            style={{
              textAlign: 'center',
              padding: '24px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '16px',
              color: '#10b981',
            }}
          >
            <CheckCircle2 size={36} style={{ margin: '0 auto 8px' }} />
            <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>
              Downloading {downloadedFormat} Resume...
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#9ca3af', marginTop: '4px' }}>
              File will save automatically to your downloads.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* PDF Option */}
            <a
              href="Resume.pdf?v=103"
              download="Abhishek_Panchmiya_Resume.pdf"
              onClick={() => handleDownload('PDF')}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                textDecoration: 'none',
                color: '#ffffff',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img src="pdf-icon.svg" alt="PDF Icon" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>PDF Document</div>
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#f59e0b',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                }}
              >
                Recommended
              </span>
            </a>

            {/* PNG Option (Folder / Zip & Direct) */}
            <a
              href="Abhishek_Resume.zip?v=103"
              download="Abhishek_Resume.zip"
              onClick={handleDownloadPng}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                textDecoration: 'none',
                color: '#ffffff',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img src="image-icon.png" alt="Image Icon" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>PNG Image</div>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
