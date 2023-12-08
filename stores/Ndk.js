import { defineStore } from "pinia"
import NDK from "@nostr-dev-kit/ndk"

export const useNdkStore = defineStore({
  id: 'ndk-store',
  state: () => {
    return {
      initialized: false,
      explicitRelayUrls: ["wss://nostr.sebastix.dev"],
      outboxRelayUrls: ["wss://purplepag.es"],
      enableOutboxModel: true,
      ndk: null,
      signer: null
    }
  },
  actions: {
    async initNdk() {
      if (this.ndk === null) {
        let options = {
          explicitRelayUrls: this.explicitRelayUrls,
          outboxRelayUrls: this.outboxRelayUrls,
          enableOutboxModel: this.enableOutboxModel
        }
        if (this.signer !== null) {
          options.signer = this.signer
        }
        console.log(options)
        this.ndk = new NDK(options)
        this.initialized = true
      }
    },
    setSigner(signer) {
      this.signer = signer
    },
    // @ todo
    // - add explicit relay
    // - remove explicit relay
    // - add outbox relay
    // - remove outbox relay
    // - connect
    // - disconnect
    // - reconnect (disconnect and connect)
  }
})