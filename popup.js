const api = chrome !== undefined ? chrome : browser;

api.storage.sync.get(['bgColor'], function (result) {
    document.getElementById('bgColorPicker').value = result.bgColor || '#ffffff';
});
api.storage.sync.get(['shadowOpacity'], function (result) {
    document.getElementById('shadowRange').value = result.shadowOpacity || '0.1';
    document.getElementById('shadowValue').textContent = result.shadowOpacity || '0.1';
});
api.storage.sync.get(['shadowRadius'], function (result) {
    document.getElementById('shadowRadiusRange').value = result.shadowRadius || '6';
    document.getElementById('shadowRadiusValue').textContent = result.shadowRadius || '6';
});

document.getElementById('shadowRange').addEventListener('input', function () {
    document.getElementById('shadowValue').textContent = this.value;
    var opacity = this.value;
    api.storage.sync.set({ shadowOpacity: opacity }, function () {
        console.log('Shadow opacity saved as ' + opacity);
    }
    );
});
document.getElementById('bgColorPicker').addEventListener('input', function () {
    var color = this.value;
    api.storage.sync.set({ bgColor: color }, function () {
        console.log('Background color saved as ' + color);
    }
    );
});
document.getElementById('shadowRadiusRange').addEventListener('input', function () {
    document.getElementById('shadowRadiusValue').textContent = this.value;
    var radius = this.value;
    api.storage.sync.set({ shadowRadius: radius }, function () {
        console.log('Shadow radius saved as ' + radius);
    }
    );
});