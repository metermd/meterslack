desc "Installs the slack style into the local application"
task :install do
  payload = File.dirname(__FILE__) + "/payload.js"
  destfile = '/Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js'

  if File.exist?(destfile)
    if File.read(destfile).match(/meterslack/)
      puts "Already installed."
    else
      File.open(destfile, 'a') do |f|
        f.write(File.read(payload))
      end
    end
  end
end
