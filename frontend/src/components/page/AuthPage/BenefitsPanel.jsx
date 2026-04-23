import React from 'react'

const BenefitsPanel = () => {
    return (
        <aside className="benefits-panel">
            <h1>Why create an account?</h1>

            <div className="benefit-item">
                <h3>💾 Cloud Sync</h3>
                <p>Access your finances from any device. </p>
                <p>Your data is encrypted and securely backed up in the cloud.</p>
            </div>

            <div className="benefit-item">
                <h3>🌍 Multi-Currency Support</h3>
                <p>
                    Traveling or working abroad? Track expenses in 150+ currencies with
                    automatic real-time conversion to your base currency.
                </p>
            </div>

            <div className="benefit-item">
                <h3>📊 Deep Insights</h3>
                <p> Identify spending leaks with visual reports and category breakdowns designed to help you save more.
                </p>
            </div>

            <div className="benefit-item">
                <h3>🔒 Financial Privacy</h3>
                <p>
                    Take control of your data.
                </p>
                <p>We prioritize your privacy and never share
                    your financial habits with third parties.</p>
            </div>
        </aside>
    )
}

export default BenefitsPanel
