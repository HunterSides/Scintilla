import "./styles.css";
export const ExtraContent = () => {
  return (
    <>
      <div id="landing">
        <div className={"features-container"}>
          <div className={"features-container-header"}>
            <h2>Bifrost: Bridge across chain</h2>
            <p>standardized, interoperable.</p>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Bridge & distributed mint permission</h3>
                <p>
                  Validator can provide extra service such as asset on/off-ramp.
                </p>
              </div>
            </div>
          </div>

          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>All token are native</h3>
                <p>Pay fee with transacted token. Use USDC as anchoring.</p>
              </div>
            </div>
          </div>

          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Secured</h3>
                <p>
                  Multi-signature funds management with BFT (highly secure)
                  setup.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"features-container"}>
          <div className={"features-container-header"}>
            <h2>Protocol: side-chain for RWA</h2>
            <p>Bringing E.S.G investing on chain.</p>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Decentralized & permissionless</h3>
                <p>
                  Working, building, or providing services to the protocol is
                  permissionless.
                </p>
              </div>
            </div>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Scalable</h3>
                <p>
                  Scintilla works in a modular, distributed and decentralized
                  way.
                </p>
                <p>
                  Nodes form cluster that can handle ~ 1k TPS. More clusters =
                  higher TPS.
                </p>
              </div>
            </div>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Battle-tested</h3>
                <p>
                  All consensus methods (Quorum based, Nakamoto, BFT POS) used
                  in the protocol.
                </p>
                <p>have been battle-tested over billions of assets. </p>
              </div>
            </div>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Adapted</h3>
                <p>Built-in system for distribution of dividends for RWA. </p>
                <p>
                  Asset transaction can have events triggers for additional
                  operations (SmartScript)
                </p>
              </div>
            </div>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Optimized network mesh</h3>
                <p>
                  As each node is listening to 2/3 of the quorums member. Every
                  transaction are at a single hops no matter where we are in the
                  network mesh.
                </p>
                <p>Ensure fast data propagation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={"features-container"}>
          <div className={"features-container-header"}>
            <h2>Governance</h2>
            <p>Internal budget and discourse system.</p>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Scintilla protocol governance</h3>
                <p>
                  Part of protocol fees are distributed towards passing proposal
                  (development, services, integrations,...).
                </p>
              </div>
            </div>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Asset fine-control</h3>
                <p>
                  Within each asset can lie a governance system and inner fee
                  collection and distribution process independently from other
                  assets.
                </p>
              </div>
            </div>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Appointed entities</h3>
                <p>
                  Legal consulting and framework offered to 3rd party businesses
                  via legal entities appointed by governance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"features-container"}>
          <div className={"features-container-header"}>
            <h2>Identity</h2>
            <p>Pay to moniker, pass only a single KYC.</p>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Scintilla Identity Service</h3>
                <p>
                  Provide with a human readable alternative for net resources.
                </p>
                <p>Allow to map addresses, hashes or website URL.</p>
                <p>Handle top and second level naming.</p>
              </div>
            </div>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Deterministic Validator Node List</h3>
                <p>
                  Using the Identity module provides the system with a
                  deterministic validator node list.
                </p>
                <p>
                  Allow to know the next proposer in advance, and all active
                  validator.
                </p>
              </div>
            </div>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Identity Stamps</h3>
                <p>
                  Legal entities can stamp an identity with a specific check
                  (such as KYC) and vouch the user within the ecosystem.
                </p>
                <p>
                  Allow to reduce number of KYC check and data dissemination.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"features-container"}>
          <div className={"features-container-header"}>
            <h2>Decentralized Data</h2>
            <p>Store and access a distributed key-value system.</p>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Use within Smart Script / Smart Contract</h3>
                <p>
                  Accessible from anywhere, allow a specific value to be shared
                  across the network.
                </p>
                <p>
                  Data access from REST or internally (contracts, scripts,
                  triggers).
                </p>
              </div>
            </div>
          </div>
          <div className={"features-card"}>
            <div className={"features-card-item-container"}>
              <div className={"features-card-item"}>
                <h3>Notary service</h3>
                <p>Identity can sign documents and keep the proof on-chain.</p>
                <p>Easy and simple way to anchor data proofs forever.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={"features-container-header"}>
          <h2>Next: Decentralized Compute & Smart Contract</h2>
        </div>

        <br />
        <br />
        <br />
      </div>
    </>
  );
};
