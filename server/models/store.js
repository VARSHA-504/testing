const mongoose = require('mongoose');

let storeSchema = mongoose.Schema(
    { 
        store_url: {type: String},
        access_token: {type: String},
        status: {type:String},
        plan: {
            plan_name : String,
            created_at : Date,
            updated_at : Date
        },
        shopify_private_app : { //Shopify Private APP Credentials
            api_key: String,
            password: String,
            shared_secret: String
        },
        qwikcilver_account: { //Qwikcilver Account Credentials
            UserName: String,
            Password: String,
            TerminalId: String,
            DateAtClient: String,
            ForwardingEntityId: String,
            apiBaseUrl: String,
            ForwardingEntityPassword: String,
            CardProgramGroupName: String
        },
        qwikcilver_web_properties: { //QC Initialization response
            MerchantOutletName: String,
            AcquirerId: String,
            OrganizationName: String,
            POSEntryMode: Number,
            POSTypeId: Number,
            POSName: String,
            TermAppVersion: String,
            CurrentBatchNumber: Number,
            TerminalId: String,
            MID: String,
            UserName: String,
            Password: String,
            ForwardingEntityId: String,
            ForwardingEntityPassword: String,
            DateAtClient: String,
            IsForwardingEntityExists: Boolean        
        }
    }, 
    { versionKey: false}
);

let store = module.exports = mongoose.model('store', storeSchema);