// Access Code Modal System for Test Pages
// Provides modal dialog for access code validation

class AccessCodeModal {
    constructor() {
        this.accessCodeSystem = new AccessCodeSystem();
        this.currentTestAction = null;
        this.createModal();
    }

    createModal() {
        // Check if modal already exists
        if (document.getElementById('accessCodeModal')) {
            return;
        }

        const modalHTML = `
            <div id="accessCodeModal" class="modal" style="display: none;">
                <div class="modal-content" style="max-width: 400px;">
                    <div class="modal-header">
                        <h2 class="modal-title">Test Access Required</h2>
                        <button class="close-button" onclick="closeAccessCodeModal()">&times;</button>
                    </div>
                    <div style="padding: 24px 0;">
                        <p style="margin-bottom: 20px; color: #666;">Please enter the 5-digit access code to proceed with this test.</p>
                        <div class="form-group">
                            <label class="form-label" for="accessCodeInput">Access Code</label>
                            <input type="text" id="accessCodeInput" class="form-input" maxlength="5" placeholder="00000" style="text-align: center; font-size: 18px; font-weight: bold;">
                        </div>
                        <div id="accessCodeError" style="color: #ff3b30; font-size: 14px; margin-top: 8px; display: none;">
                            Invalid access code. Please try again.
                        </div>
                    </div>
                    <div class="button-group">
                        <button type="button" class="button button-secondary" onclick="closeAccessCodeModal()">Cancel</button>
                        <button type="button" class="button button-primary" onclick="validateAccessCode()">Access Test</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.setupEventListeners();
    }

    setupEventListeners() {
        const input = document.getElementById('accessCodeInput');
        
        // Auto-format input to numbers only
        input.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });

        // Submit on Enter key
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                validateAccessCode();
            }
        });

        // Close modal when clicking outside
        document.getElementById('accessCodeModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeAccessCodeModal();
            }
        });
    }

    showModal(testName, testAction) {
        this.currentTestAction = testAction;
        
        // Update modal content
        document.querySelector('#accessCodeModal .modal-title').textContent = `Access Required: ${testName}`;
        
        // Clear previous input and errors
        document.getElementById('accessCodeInput').value = '';
        document.getElementById('accessCodeError').style.display = 'none';
        
        // Show modal
        document.getElementById('accessCodeModal').style.display = 'block';
        
        // Focus input
        setTimeout(() => {
            document.getElementById('accessCodeInput').focus();
        }, 100);
    }

    closeModal() {
        document.getElementById('accessCodeModal').style.display = 'none';
        this.currentTestAction = null;
    }

    validateCode() {
        const inputCode = document.getElementById('accessCodeInput').value;
        const errorElement = document.getElementById('accessCodeError');
        
        if (inputCode.length !== 5) {
            this.showError('Please enter a 5-digit code.');
            return;
        }

        if (this.accessCodeSystem.validateCode(inputCode)) {
            // Code is valid
            this.closeModal();
            
            if (this.currentTestAction) {
                this.currentTestAction();
            }
        } else {
            // Code is invalid
            this.showError('Invalid access code. Please try again.');
            document.getElementById('accessCodeInput').value = '';
            document.getElementById('accessCodeInput').focus();
        }
    }

    showError(message) {
        const errorElement = document.getElementById('accessCodeError');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Global functions for modal interaction
let accessCodeModal;

function initAccessCodeModal() {
    if (!accessCodeModal) {
        accessCodeModal = new AccessCodeModal();
    }
}

function showAccessCodeModal(testName, testAction) {
    initAccessCodeModal();
    accessCodeModal.showModal(testName, testAction);
}

function closeAccessCodeModal() {
    if (accessCodeModal) {
        accessCodeModal.closeModal();
    }
}

function validateAccessCode() {
    if (accessCodeModal) {
        accessCodeModal.validateCode();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initAccessCodeModal();
});