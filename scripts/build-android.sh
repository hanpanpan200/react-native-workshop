# 1. Terminate if something wrong
set -e

# 2. Install fastlane and fastlane-plugin-pgyer
cd android
bundle install

# 3. Excute fastlane actions
bundle exec fastlane test
bundle exec fastlane beta

# 4. Go back to project directory after success
cd ..