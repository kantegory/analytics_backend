from rest_framework import viewsets, filters
from rest_framework.permissions import IsAdminUser

from gia_practice_app.GIA.models import GIA, GIABaseTemplate, CriteriaVKR
from gia_practice_app.GIA.serializers import GIASerializer, GIABaseTemplateSerializer, CriteriaVKRSerializer, \
    GIAPrimitiveSerializer
from workprogramsapp.permissions import IsRpdDeveloperOrReadOnly, IsOwnerOrDodWorkerOrReadOnly


class GIASet(viewsets.ModelViewSet):
    queryset = GIA.objects.all()
    serializer_class = GIASerializer
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    permission_classes = [IsOwnerOrDodWorkerOrReadOnly]
    search_fields = ["discipline_code", "title"]
    def get_serializer_class(self):
        if self.action == 'list':
            return GIAPrimitiveSerializer
        return GIASerializer


class GIABaseTemplateSet(viewsets.ModelViewSet):
    queryset = GIABaseTemplate.objects.all()
    serializer_class = GIABaseTemplateSerializer
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    permission_classes = [IsAdminUser]


class CriteriaVKRSet(viewsets.ModelViewSet):
    queryset = CriteriaVKR.objects.all()
    serializer_class = CriteriaVKRSerializer
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    permission_classes = [IsRpdDeveloperOrReadOnly]
