// Access Code System for Bulldog Garage Tests
// Provides 5-digit access codes that change every hour

class AccessCodeSystem {
    constructor() {
        this.storageKey = 'bulldogGarageAccessCode';
        this.timestampKey = 'bulldogGarageCodeTimestamp';
        this.codeExpiryHours = 1; // Code changes every hour
        this.init();
    }

    init() {
        // Generate initial code if none exists or if expired
        if (!this.isCurrentCodeValid()) {
            this.generateNewCode();
        }
    }

    generateNewCode() {
        // Generate random 5-digit code
        const code = Math.floor(10000 + Math.random() * 90000).toString();
        const timestamp = Date.now();
        
        // Store in localStorage
        localStorage.setItem(this.storageKey, code);
        localStorage.setItem(this.timestampKey, timestamp.toString());
        
        console.log('New access code generated:', code);
        return code;
    }

    getCurrentCode() {
        if (!this.isCurrentCodeValid()) {
            return this.generateNewCode();
        }
        return localStorage.getItem(this.storageKey);
    }

    isCurrentCodeValid() {
        const code = localStorage.getItem(this.storageKey);
        const timestamp = localStorage.getItem(this.timestampKey);
        
        if (!code || !timestamp) {
            return false;
        }

        const codeAge = Date.now() - parseInt(timestamp);
        const expiryTime = this.codeExpiryHours * 60 * 60 * 1000; // Convert hours to milliseconds
        
        return codeAge < expiryTime;
    }

    validateCode(inputCode) {
        const currentCode = this.getCurrentCode();
        return inputCode.toString() === currentCode;
    }

    getTimeUntilExpiry() {
        const timestamp = localStorage.getItem(this.timestampKey);
        if (!timestamp) {
            return 0;
        }

        const codeAge = Date.now() - parseInt(timestamp);
        const expiryTime = this.codeExpiryHours * 60 * 60 * 1000;
        const timeRemaining = expiryTime - codeAge;
        
        return Math.max(0, timeRemaining);
    }

    formatTimeRemaining() {
        const timeRemaining = this.getTimeUntilExpiry();
        const minutes = Math.floor(timeRemaining / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Force refresh code (for admin refresh button)
    forceRefreshCode() {
        return this.generateNewCode();
    }
}

// Create global instance
window.AccessCodeSystem = AccessCodeSystem;