// import entire SDK
import AWS from 'aws-sdk'
let s3:any

AWS.config.region = process.env.API_URL? process.env.API_URL:''
const s3BucketName = process.env.s3BucketName? process.env.s3BucketName:''


// IAMユーザのアクセスキーとシークレットキー
const credentials = new AWS.Credentials(
    {
        accessKeyId: process.env.AccessKeyId? process.env.AccessKeyId:'',
        secretAccessKey: process.env.SecretAccessKey? process.env.SecretAccessKey:''
    }
);
AWS.config.credentials = credentials;

const s3ImageData = {
    content: false,
};

s3 = new AWS.S3()

export default s3