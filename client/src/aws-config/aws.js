import aws from 'aws-sdk'

const config = {
    "bucketName":"cmpe-273-etsy",
    "region": "ap-south-1",
    "accessKeyId": "AKIAROAVIZKNNU6J2G4X",
    "secretAccessKey": "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",
    "signatureVersion": "v4"
}

export const bucketName = config.bucketName

export const s3 = new aws.S3({
    region: config.region,
    signatureVersion: config.signatureVersion,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    Bucket: config.Bucket,
})


