# Extract emails from GMail label using Thunderbird with this:
# https://nic-nac-project.org/~kaosmos/index-en.html#eac
# Then export them to CSV and parse them with this script.

require 'csv'

quote_chars = %w(" | ~ ^ & *)
begin
  @report = CSV.read('poll-tape-senders.csv', headers: :first_row, quote_char: quote_chars.shift)
rescue CSV::MalformedCSVError
  quote_chars.empty? ? raise : retry
end

emails = @report.map{ |row| row['Primary Email'] }.reject{ |email| email.include? '"' }

File.open('poll-tape-senders-by-emails.txt', 'w') { |file| file << emails.map(&:strip).join(', ') }
