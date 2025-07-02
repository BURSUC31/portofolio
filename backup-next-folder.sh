#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
# Name for the new backup bucket.
BACKUP_BUCKET_NAME="dimitrie-portfolio-next-backup"
# The region for the new bucket.
REGION="EU"
# The local directory to back up. This is the output of the `next build` command.
SOURCE_DIR="./out/_next/static"

# --- Script ---

echo "🚀 Starting backup of the 'static' folder..."

# 1. Check if the source directory exists.
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ Error: Source directory '$SOURCE_DIR' not found."
  echo "Please run the build command ('yarn build') first to generate the 'out' directory."
  exit 1
fi

# 2. Create the backup bucket if it doesn't already exist.
echo "☁️  Checking for backup bucket: gs://$BACKUP_BUCKET_NAME"
if gsutil ls -b "gs://$BACKUP_BUCKET_NAME" >/dev/null 2>&1; then
  echo "✅ Backup bucket already exists."
else
  echo "Bucket does not exist. Creating new bucket..."
  gsutil mb -l "$REGION" "gs://$BACKUP_BUCKET_NAME"
  echo "✅ Backup bucket created successfully."
fi

# 3. Upload the static folder to the backup bucket using rsync.
echo "📁 Uploading '$SOURCE_DIR' to 'gs://$BACKUP_BUCKET_NAME/_static'..."
gsutil rsync -r "$SOURCE_DIR" "gs://$BACKUP_BUCKET_NAME/_static"

echo "🎉 Backup completed successfully!"
echo "🌍 Your 'static' folder is backed up in the bucket 'gs://$BACKUP_BUCKET_NAME/_static'"
