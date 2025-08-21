// Access Code System for Bulldog Garage Tests
// Provides 5-digit access codes that change every hour

class AccessCodeSystem {
    constructor() {
        this.storageKey = 'bulldogGarageAccessCode';
        this.timestampKey = 'bulldogGarageCodeTimestamp';
        this.visibilityKey = 'bulldogGarageCodeVisible';
        this.durationKey = 'bulldogGarageCodeDuration';
        this.codeExpiryHours = 1; // Default code changes every hour
        this.init();
    }

    init() {
        // Set default visibility to false if not set
        if (localStorage.getItem(this.visibilityKey) === null) {
            this.setCodeVisibility(false);
        }
        
        // Set default duration to 1 hour if not set
        if (localStorage.getItem(this.durationKey) === null) {
            this.setCodeDuration(1);
        }
        
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

    // New methods for visibility and duration control
    setCodeVisibility(visible) {
        localStorage.setItem(this.visibilityKey, visible.toString());
    }

    isCodeVisible() {
        return localStorage.getItem(this.visibilityKey) === 'true';
    }

    setCodeDuration(hours) {
        localStorage.setItem(this.durationKey, hours.toString());
        this.codeExpiryHours = hours;
    }

    getCodeDuration() {
        const duration = localStorage.getItem(this.durationKey);
        return duration ? parseFloat(duration) : 1;
    }

    // Make code visible for specified duration (in hours)
    makeCodeVisible(durationHours) {
        this.setCodeDuration(durationHours);
        this.setCodeVisibility(true);
        
        // Auto-hide after duration
        setTimeout(() => {
            this.setCodeVisibility(false);
        }, durationHours * 60 * 60 * 1000);
        
        return this.getCurrentCode();
    }

    isCurrentCodeValid() {
        const code = localStorage.getItem(this.storageKey);
        const timestamp = localStorage.getItem(this.timestampKey);
        
        if (!code || !timestamp) {
            return false;
        }

        const codeAge = Date.now() - parseInt(timestamp);
        const durationHours = this.getCodeDuration();
        const expiryTime = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
        
        return codeAge < expiryTime;
    }

    validateCode(inputCode) {
        if (!this.isCodeVisible()) {
            return false; // Code is not visible to users
        }
        
        const currentCode = this.getCurrentCode();
        return inputCode.toString() === currentCode;
    }

    getTimeUntilExpiry() {
        const timestamp = localStorage.getItem(this.timestampKey);
        if (!timestamp) {
            return 0;
        }

        const codeAge = Date.now() - parseInt(timestamp);
        const durationHours = this.getCodeDuration();
        const expiryTime = durationHours * 60 * 60 * 1000;
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